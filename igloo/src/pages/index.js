import prisma from "../lib/prisma";

export const getStaticProps = async () => {
  const products = await prisma.product.findMany({
    where: { stock_quantity: { gt: 0 } }, // Fetch only products with stock
    include: {
      category: true, // Include the whole category data.
      order_items: true, // Include order items
    },
  });

  return {
    props: { products },
    revalidate: 10,
  };
};
