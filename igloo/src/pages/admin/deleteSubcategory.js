import React from "react";
import styles from "@/styles/admin.module.css";

export default function DeleteSubcategory({ subcategoryId, setMessage }) {
  const handleDeleteSubcategory = async () => {
    try {
      const response = await fetch(
        `/api/deleteSubcategory?id=${subcategoryId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setMessage("Subcategory deleted successfully");

        // Fetch the updated subcategories list here
        // You can call another function or API to update the subcategories list in the Admin component
      } else {
        setMessage("Error deleting subcategory");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error deleting subcategory");
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDeleteSubcategory}>
      Delete Subcategory
    </button>
  );
}
