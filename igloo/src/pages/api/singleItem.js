import prisma from "@/lib/prisma";
import { getSession } from "next-auth/client";

//get single item by id from db
export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;

        try {
            const item = await prisma.item.findUnique({
                where: {
                    id: parseInt(id),
                },
                include: {
                    category: true,
                    subcategory: true,
                },
            });

            res.status(200).json(item);
        } catch (error) {
            console.error("Error getting item:", error);
            res.status(500).json({ itemMessage: "Error getting item" });
        }
    }