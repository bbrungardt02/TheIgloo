import React from "react";
import { getStaticProps } from "./api/getStaticProps";

export default function Home({ products }) {
  return (
    <div>
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

export { getStaticProps }; // Export the data-fetching function
