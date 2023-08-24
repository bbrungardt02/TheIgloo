import React from "react";
import Nav from "@/app/components/Nav";
import "@/app/globals.css";

// manage products
// manage categories
// manage users

export default function admin() {
  return (
    <div>
      <Nav />

      <h3>Users</h3>
      <h3>Products</h3>
      <h3>Categories</h3>
      <h3>All Orders</h3>
      <h3>Inventory</h3>
    </div>
  );
}
