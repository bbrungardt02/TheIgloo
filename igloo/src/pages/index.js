import prisma from "../lib/prisma";

export const getStaticProps = async () => {
  const products = await prisma.product.findMany({
    where: { stock_quantity: { gt: 0 } },
    include: {
      category: true,
      order_items: true,
    },
  });

  // Convert Date objects to strings
  const serializableProducts = products.map((product) => ({
    ...product,
    created_at: product.created_at.toISOString(), // Convert Date to string
  }));

  return {
    props: { products: serializableProducts }, // Use the modified data
    revalidate: 10,
  };
};

export default function Home({ products }) {
  // Your Home component code that uses the fetched products
}
