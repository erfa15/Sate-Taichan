import formidable from "formidable";
import fs from "fs";
import uploadToImgBB from "@/src/utils/uploadToImgBB";
import prisma from "@/lib/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
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
            const createdProduct = await prisma.product.create({
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
              .json({ status: "Success", data: createdProduct });
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
