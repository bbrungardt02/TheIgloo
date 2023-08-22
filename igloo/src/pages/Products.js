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

  return (
    <div>
      <p>Diamond grille</p>
      <div>
        <h1>Product List</h1>

        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.map((product) => (
              <ul key={product.id}>
                <>{product.title}</>
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
