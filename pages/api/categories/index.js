import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const categories = await prisma.kategori.findMany({
        select: {
          id: true,
          title: true,
        },
      });
      return res.status(200).json({
        status: "success",
        data: categories,
      });
    } catch (error) {
      console.error("Failed to fetch categories", error);
      return res.status(500).json({
        status: "error",
        message: "Failed to fetch categories",
      });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }
}
