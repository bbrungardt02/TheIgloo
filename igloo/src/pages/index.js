import React from "react";
import prisma from "../lib/prisma";
import Nav from "@/app/components/Nav";

export default function Home({ products }) {
  return (
    <div>
      <Nav />
      <h1>The Igloo</h1>
      <p>Keepin' it Icy since 1542</p>

      <h2>Featured Products</h2>
      <div>
        {products.length === 0 ? (
          <p>No jewelery products available.</p>
        ) : (
          <div>
            {products.map((product, index) => (
              <ul key={index}>
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price} USD</li>
                <li>{product.subcategory.name}</li>
                <li>
                  <img
                    src={product.image_url}
                    alt="Item Image"
                    className="w-24"
                  />
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await prisma.product.findMany({
    where: { stock_quantity: { gt: 0 } },
    select: {
      product_id: true,
      name: true,
      description: true,
      price: true,
      subcategory: true,
      image_url: true,
    },
  });

  return {
    props: { products },
    revalidate: 10,
  };
}
