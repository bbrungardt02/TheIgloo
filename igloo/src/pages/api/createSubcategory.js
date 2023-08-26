import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    try {
      const newSubcategory = await prisma.subcategory.create({
        data: {
          name,
        },
      });

      res
        .status(201)
        .json({
          subcategoryMessage: "Subcategory created successfully",
          newSubcategory,
        });
    } catch (error) {
      console.error("Error creating subcategory:", error);
      res
        .status(500)
        .json({ subcategoryMessage: "Error creating subcategory" });
    }
  } else {
    res.status(405).json({ subcategoryMessage: "Method not allowed" });
  }
}
