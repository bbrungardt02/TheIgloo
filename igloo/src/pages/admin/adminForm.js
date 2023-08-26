import { useState } from "react";

function AdminForm({ setMessage }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImage_url] = useState("");
  const [stock_quantity, setStock_quantity] = useState(0);
  const [subcategoryID, setSubcategoryID] = useState("");
  const [categoryID, setCategoryID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProductData = {
      name,
      description,
      price: parseFloat(price),
      image_url,
      stock_quantity: parseFloat(stock_quantity),
      subcategory: {
        connect: {
          subcategory_id: parseInt(subcategoryID),
        },
      },
      category: {
        connect: {
          category_id: parseInt(categoryID),
        },
      },
    };

    try {
      const response = await fetch("/api/productAPI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
      });

      const data = await response.json();
      setMessage(data.message); // Display success or error message
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating product");
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
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="integer"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={image_url}
        onChange={(e) => setImage_url(e.target.value)}
        placeholder="Image URL"
      />
      <input
        type="integer"
        value={stock_quantity}
        onChange={(e) => setStock_quantity(e.target.value)}
        placeholder="Stock Quantity"
      />
      <input
        type="integer"
        value={subcategoryID}
        onChange={(e) => setSubcategoryID(e.target.value)}
        placeholder="SubcategoryID"
      />
      <input
        type="integer"
        value={categoryID}
        onChange={(e) => setCategoryID(e.target.value)}
        placeholder="CategoryID"
      />
      <button type="submit">Create Product</button>
    </form>
  );
}

export default AdminForm;
