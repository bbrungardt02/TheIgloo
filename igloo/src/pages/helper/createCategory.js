import { useState } from "react";
import styles from "@/styles/admin.module.css";

export default function CreateCategory({ setCategoryMessage }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCategoryData = {
      name,
    };

    try {
      const response = await fetch("/api/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategoryData),
      });

      const data = await response.json();
      setCategoryMessage(data.categoryMessage); // Display success or error message
    } catch (error) {
      console.error("Error:", error);
      setCategoryMessage("Error creating category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button className={styles.createButton} type="submit">
        Create Category
      </button>
    </form>
  );
}
