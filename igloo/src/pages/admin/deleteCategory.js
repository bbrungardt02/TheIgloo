import React from "react";

export default function DeleteCategory({ categoryId, setMessage }) {
  const handleDeleteCategory = async () => {
    try {
      const response = await fetch(`/api/deleteCategory?id=${categoryId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Category deleted successfully");

        // Fetch the updated categories list here
        // You can call another function or API to update the categories list in the Admin component
      } else {
        setMessage("Error deleting category");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error deleting category");
    }
  };

  return <button onClick={handleDeleteCategory}>Delete Category</button>;
}
