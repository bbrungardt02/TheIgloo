// updateProduct.js
export default async function handler(req, res) {
  const productId = parseInt(req.query.productId);

  if (req.method === "PUT") {
    const { price, stock_quantity } = req.body;

    try {
      const updatedProduct = await prisma.product.update({
        where: {
          product_id: productId,
        },
        data: {
          price,
          stock_quantity,
        },
      });

      res.status(200).json({
        productMessage: "Product updated successfully",
        updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ productMessage: "Error updating product" });
    }
  } else {
    res.status(405).json({ productMessage: "Method not allowed" });
  }
}
