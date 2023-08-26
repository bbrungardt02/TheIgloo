import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      description,
      price,
      image_url,
      stock_quantity,
      subcategory,
      //   subcategory_id,
      category,
      //   category_id,
    } = req.body;

    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price,
          image_url,
          stock_quantity,
          subcategory,
          //   subcategory_id,
          category,
          //   category_id,
        },
      });

      res
        .status(201)
        .json({ message: "Product created successfully", newProduct });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Error creating product" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
