import React from "react";
import prisma from "../lib/prisma";

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>The Igloo</h1>
      <p>Keepin it Icy since 1542</p>

      <h2>Featured Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const products = await prisma.product.findMany({
    where: { stock_quantity: { gt: 0 } },
    include: {
      category: true,
      order_items: true,
    },
  });

  // Serialize Date objects to ISO 8601 strings
  const serializableProducts = products.map((product) => {
    return {
      ...product,
      created_at: product.created_at.toISOString(),
    };
  });

  return {
    props: { products: serializableProducts },
    revalidate: 10,
  };
}

export default HomePage;
