import React from "react";
import styles from "@/styles/admin.module.css";
export default function DeleteProduct({ productId, setProductMessage }) {
  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`/api/deleteProduct?id=${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProductMessage("Product deleted successfully");

        // Fetch the updated products list here
        // You can call another function or API to update the products list in the Admin component
      } else {
        setProductMessage("Error deleting product");
      }
    } catch (error) {
      console.error("Error:", error);
      setProductMessage("Error deleting product");
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDeleteProduct}>
      Delete Product
    </button>
  );
}
