import { useState } from "react";
import styles from "@/styles/admin.module.css";

export default function CreateSubcategory({ setSubcategoryMessage }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSubcategoryData = {
      name,
    };

    try {
      const response = await fetch("/api/createSubcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSubcategoryData),
      });

      const data = await response.json();
      setSubcategoryMessage(data.subcategoryMessage); // Display success or error message
    } catch (error) {
      console.error("Error:", error);
      setSubcategoryMessage("Error creating subcategory");
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
        Create Subcategory
      </button>
    </form>
  );
}
