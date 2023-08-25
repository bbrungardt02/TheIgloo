import prisma from "../../lib/prisma";

export async function getStaticProps() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      isAdmin: true,
    },
  });

  const products = await prisma.product.findMany({
    select: {
      product_id: true,
      name: true,
      description: true,
      price: true,
      image_url: true,
      stock_quantity: true,
      subcategory: true,
      category: true,
    },
  });

  const subcategories = await prisma.subcategory.findMany({
    select: {
      subcategory_id: true,
      name: true,
    },
  });

  const categories = await prisma.category.findMany({
    select: {
      category_id: true,
      name: true,
    },
  });

  const orders = await prisma.order.findMany({
    select: {
      order_id: true,
      order_date: true,
      total_amount: true,
      user: true,
    },
  });

  return {
    props: { users, products, categories, orders, subcategories },
    revalidate: 10,
  };
}
