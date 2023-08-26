import React from "react";
import styles from "@/styles/admin.module.css";

export default function DeleteSubcategory({
  subcategoryId,
  setSubcategoryMessage,
}) {
  const handleDeleteSubcategory = async () => {
    try {
      const response = await fetch(
        `/api/deleteSubcategory?id=${subcategoryId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setSubcategoryMessage("Subcategory deleted successfully");

        // Fetch the updated subcategories list here
        // You can call another function or API to update the subcategories list in the Admin component
      } else {
        setSubcategoryMessage("Error deleting subcategory");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubcategoryMessage("Error deleting subcategory");
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDeleteSubcategory}>
      Delete Subcategory
    </button>
  );
}
