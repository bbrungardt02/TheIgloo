import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await prisma.product.delete({
        where: {
          product_id: parseInt(id),
        },
      });

      res.status(200).end();
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ productMessage: "Error deleting product" });
    }
  } else {
    res.status(405).end();
  }
}
