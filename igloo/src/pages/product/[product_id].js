import prisma from "../../lib/prisma";

export async function getServerSideProps({ params }) {
  try {
    const productId = parseInt(params.product_id);
    const product = await prisma.product.findUnique({
      where: { product_id: productId },
      include: {
        // Include any related data you want to display on the product page here
        category: true,
        subcategory: true,
      },
    });

    // Format the created_at Date object as a string
    const formattedProduct = {
      ...product,
      created_at: product.created_at.toLocaleString(),
    };

    return {
      props: {
        product: formattedProduct,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}

export default function ProductPage({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock Quantity: {product.stock_quantity}</p>
      <p>Created At: {product.created_at}</p>
      {/* Render other product details here */}
    </div>
  );
}
