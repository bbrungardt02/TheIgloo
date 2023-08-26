import { useState } from "react";

export default function CreateCategory({ setMessage }) {
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
      setMessage(data.message); // Display success or error message
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating category");
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
      <button type="submit">Create Category</button>
    </form>
  );
}
