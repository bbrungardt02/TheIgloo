import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const handleAddToCart = () => {
    // Add the product to the cart
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-item-container">
      <>
        <div className="product-image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </>
    </div>
  );
}
