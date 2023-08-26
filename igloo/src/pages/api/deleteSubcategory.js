import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      await prisma.subcategory.delete({
        where: {
          subcategory_id: parseInt(id),
        },
      });

      res.status(200).end();
    } catch (error) {
      console.error("Error deleting subcategory:", error);
      res.status(500).json({ message: "Error deleting subcategory" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
