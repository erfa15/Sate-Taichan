import prisma from "@/lib/prisma";
import formidable from "formidable";
import fs from "fs";
import uploadToImgBB from "@/src/utils/uploadToImgBB";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function productById(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: id.toString(),
        },
      });
      return res.status(200).json({ status: "Success", data: product });
    } catch (error) {
      console.error("Error retrieving product:", error);
      return res.status(500).json({ error: "Error retrieving product" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: id.toString(),
        },
      });

      return res.status(200).json({ status: "Success", data: deletedProduct });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ error: "Error deleting product" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;

    const form = formidable();

    try {
      form.parse(req, async (err, fields, files) => {
        const file = files.image[0];

        fs.readFile(file.filepath, async (err, data) => {
          if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Error reading file" });
          }
          const fileData = Buffer.from(data).toString("base64");
          try {
            const imageUrl = await uploadToImgBB(fileData);
            const updatedProduct = await prisma.product.update({
              where: {
                id: id.toString(),
              },
              data: {
                title: fields.title[0].toString(),
                price: parseInt(fields.price),
                desc: fields.desc[0].toString(),
                image: imageUrl.toString(),
                kategori: {
                  connect: { id: fields.kategoriId.toString() },
                },
              },
            });
            return res
              .status(200)
              .json({ status: "Success", data: updatedProduct });
          } catch (error) {
            console.error("Error uploading image:", error);
            return res.status(500).json({ error: "Error uploading image" });
          }
        });
      });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  } else {
    return res.status(405).json({ error: "Metode HTTP tidak diizinkan" });
  }
}
