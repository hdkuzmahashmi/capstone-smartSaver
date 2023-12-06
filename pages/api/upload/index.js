import formidable from "formidable";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

async function uploadToCloudinary(file) {
  try {
    const result = await cloudinary.v2.uploader.upload(file.filepath, {
      public_id: file.newFilename,
      folder: "SmartSaver",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function handleCloudinaryUpload(request) {
  const form = formidable({ multiples: true });

  try {
    const { file } = (await form.parse(request)).files;

    if (!file || file.length === 0) {
      throw new Error("No files provided");
    }

    const uploadPromises = file.map(uploadToCloudinary);
    const uploadResults = await Promise.all(uploadPromises);
    return uploadResults;
  } catch (error) {
    console.error("Error handling Cloudinary upload: ", error);
    throw error;
  }
}