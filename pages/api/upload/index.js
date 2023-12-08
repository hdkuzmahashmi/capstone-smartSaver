import formidable from "formidable";
import cloudinary from "cloudinary";

// Configure Cloudinary with API credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Configuration for Next.js API route to disable default bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handle Cloudinary image uploads
export default async function handleCloudinaryUpload(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  try {
    // Create a formidable form parser with support for multiple files
    const form = formidable({ multiples: true });

    // Parse the incoming request to extract form fields and files
    const [fields, files] = await form.parse(request);

    // Extract the uploaded files from the form data
    const uploadedFiles = files.file;
    console.log("uploadedFiles:", uploadedFiles);

    // Use Promise.all to upload each file to Cloudinary concurrently
    const uploadPromises = uploadedFiles.map(async (file) => {
      const { newFilename, filepath } = file;

      // Upload the file to Cloudinary and configure options
      const result = await cloudinary.v2.uploader.upload(filepath, {
        public_id: newFilename,
        folder: "Smartsaver",
      });

      return result;
    });

    // Wait for all uploads to complete and send the results in the response
    const results = await Promise.all(uploadPromises);
    response.status(200).json(results);
  } catch (error) {
    console.error("Error processing files:", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}
