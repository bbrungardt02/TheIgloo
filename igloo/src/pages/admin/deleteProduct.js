import React from "react";

export default function DeleteProduct({ productId, setMessage }) {
  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`/api/deleteProduct?id=${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Product deleted successfully");

        // Fetch the updated products list here
        // You can call another function or API to update the products list in the Admin component
      } else {
        setMessage("Error deleting product");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error deleting product");
    }
  };

  return <button onClick={handleDeleteProduct}>Delete Product</button>;
}
