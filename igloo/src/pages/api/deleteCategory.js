import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await prisma.category.delete({
        where: {
          category_id: parseInt(id),
        },
      });

      res.status(200).end();
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).json({ categoryMessage: "Error deleting category" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
