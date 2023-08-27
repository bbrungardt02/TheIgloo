import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { userId, isAdmin } = req.query;

    try {
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          isAdmin: JSON.parse(isAdmin),
        },
      });

      res.status(200).json({
        userMessage: "User updated successfully",
      });
    } catch (error) {
      console.error("Error toggling admin:", error);
      res.status(500).json({ userMessage: "Error toggling admin:" });
    }
  } else {
    res.status(405).json({ userMessage: "Method not allowed" });
  }
}
