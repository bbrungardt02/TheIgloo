import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    try {
      const newCategory = await prisma.category.create({
        data: {
          name,
        },
      });

      res.status(201).json({
        categoryMessage: "Category created successfully",
        newCategory,
      });
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ categoryMessage: "Error creating category" });
    }
  } else {
    res.status(405).json({ categoryMessage: "Method not allowed" });
  }
}
