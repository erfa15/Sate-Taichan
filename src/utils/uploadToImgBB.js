import axios from "axios";

export default async function uploadToImgBB(file) {
  const apiKey = process.env.IMGBB_API_KEY; // Ganti dengan API Key ImgBB Anda

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          key: apiKey,
        },
      }
    );

    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw new Error("Error uploading image to ImgBB");
  }
}
