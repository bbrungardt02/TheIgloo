import { useState } from "react";
import { getStaticProps } from "./api/getStaticProps";
import CreateProduct from "./admin/createProduct";
import CreateCategory from "./admin/createCategory";
import CreateSubcategory from "./admin/createSubcategory";
import DeleteProduct from "./admin/deleteProduct";
import DeleteCategory from "./admin/deleteCategory";
import DeleteSubcategory from "./admin/deleteSubcategory";
import styles from "../styles/Admin.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.heading}>Users</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
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
      </div>
      <h1 className={styles.heading}>Products</h1>
      {/* add search product feature */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td className={styles.imageCell}>{product.image_url}</td>
                <td>{product.stock_quantity}</td>
                <td>{product.subcategory.name}</td>
                <td>{product.category.name}</td>
                <td>
                  <DeleteProduct
                    productId={product.product_id}
                    setMessage={setMessage}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Create Product</h1>
      <CreateProduct setMessage={setMessage} />
      <p className={styles.errorMessage}>{message}</p>
      <h1 className={styles.heading}>Subcategories</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subcategories.map((subcategory) => (
              <tr key={subcategory.subcategory_id}>
                <td>{subcategory.subcategory_id}</td>
                <td>{subcategory.name}</td>
                <td>
                  <DeleteSubcategory
                    subcategoryId={subcategory.subcategory_id}
                    setMessage={setMessage}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Create Subcategory</h1>
      <CreateSubcategory setMessage={setMessage} />
      <p className={styles.errorMessage}>{message}</p>
      <h1 className={styles.heading}>Categories</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.category_id}>
                <td>{category.category_id}</td>
                <td>{category.name}</td>
                <td>
                  <DeleteCategory
                    categoryId={category.category_id}
                    setMessage={setMessage}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Create Category</h1>
      <CreateCategory setMessage={setMessage} />
      <p className={styles.errorMessage}>{message}</p>
      <h1 className={styles.heading}>All Orders</h1>
      {/* add search order feature */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Date</th>
              <th>Total Amount</th>
              <th>User</th>
              <th></th>
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
      </div>
      <h1 className={styles.heading}>Low Inventory ( &lt;15 )</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
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
    </div>
  );
}

export { getStaticProps }; // Export the data-fetching function
