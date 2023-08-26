import { useState } from "react";
import { getStaticProps } from "./api/getStaticProps";
import CreateProduct from "./admin/createProduct";
import CreateCategory from "./admin/createCategory";
import CreateSubcategory from "./admin/createSubcategory";

export default function Admin({
  users,
  products,
  categories,
  orders,
  subcategories,
}) {
  const [message, setMessage] = useState("");

  // add search order feature
  // add search product feature
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Products</h1>
      {/* add search product feature */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image URL</th>
            <th>Stock Quantity</th>
            <th>Subcategory</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.image_url}</td>
              <td>{product.stock_quantity}</td>
              <td>{product.subcategory.name}</td>
              <td>{product.category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Create Product</h1>
      <CreateProduct setMessage={setMessage} />
      <p>{message}</p>
      <h1>Subcategories</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory) => (
            <tr key={subcategory.subcategory_id}>
              <td>{subcategory.subcategory_id}</td>
              <td>{subcategory.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Create Subcategory</h1>
      <CreateSubcategory setMessage={setMessage} />
      <p>{message}</p>
      <h1>Categories</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.category_id}>
              <td>{category.category_id}</td>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Create Category</h1>
      <CreateCategory setMessage={setMessage} />
      <p>{message}</p>
      <h1>All Orders</h1>
      {/* add search order feature */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.order_date}</td>
              <td>{order.total_amount}</td>
              <td>{order.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Low Inventory ( &lt;15 )</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => product.stock_quantity < 15)
            .map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.name}</td>
                <td>{product.stock_quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export { getStaticProps }; // Export the data-fetching function
