import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }

  try {
    const categories = await prisma.kategori.findMany({
      select: {
        title: true,
      },
    });

    const { category } = req.query;
    const validCategories = categories.map((item) => item.title);

    if (!category) {
      return res.status(400).json({
        status: "error",
        message: "Category parameter is required",
      });
    }
    const getCategory = validCategories.find((item) =>
      item.includes(category.toLowerCase())
    );

    if (!getCategory) {
      return res.status(400).json({
        status: "error",
        message: "Invalid category",
      });
    }

    const kategori = await prisma.kategori.findFirst({
      where: {
        title: getCategory,
      },
      include: {
        products: {
          select: {
            id: true,
            title: true,
            price: true,
            desc: true,
            image: true,
          },
        },
      },
    });

    if (!kategori) {
      return res.status(404).json({
        status: "error",
        message: "Category not found",
      });
    }

    return res.status(200).json({ status: "Success", results: kategori });
  } catch (error) {
    console.error("Failed to fetch data", error);

    return res.status(500).json({
      status: "error",
      message: "Failed to fetch data",
    });
  } finally {
    await prisma.$disconnect();
  }
}
