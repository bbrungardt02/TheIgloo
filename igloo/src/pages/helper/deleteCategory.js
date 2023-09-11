import React from "react";
import styles from "@/styles/admin.module.css";

export default function DeleteCategory({ categoryId, setCategoryMessage }) {
  const handleDeleteCategory = async () => {
    try {
      const response = await fetch(`/api/deleteCategory?id=${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setCategoryMessage("Category deleted successfully");

        // Fetch the updated categories list here
        // You can call another function or API to update the categories list in the Admin component
      } else {
        setCategoryMessage("Error deleting category");
      }
    } catch (error) {
      console.error("Error:", error);
      setCategoryMessage("Error deleting category");
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDeleteCategory}>
      Delete Category
    </button>
  );
}
