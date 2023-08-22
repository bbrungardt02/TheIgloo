import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Filter products with category "jewelery"
  const jeweleryProducts = data.filter(
    (product) => product.category === "jewelery"
  );

  return (
    <div>
      <p>Diamond grille</p>
      <div>
        <h1>Product List</h1>

        {jeweleryProducts.length === 0 ? (
          <p>No jewelery products available.</p>
        ) : (
          <div>
            {jeweleryProducts.map((product) => (
              <ul key={product.id}>
                <li>{product.title}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
                <li>
                  <img src={product.image} alt="Item Image" />
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
