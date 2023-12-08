import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dcnjst4ow",
  api_key: "877586892348186",
  api_secret: "zAEInTMFgSpx2iALFJSnKe1e-J8",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleCloudinaryUpload(request, response) {
  if (request.method !== "POST") {
    console.log("test request");
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({});

  const [fields, files] = await form.parse(request);
  const file = files.file[0];
  const { newFilename, filepath } = file;
  const result = await cloudinary.v2.uploader.upload(filepath, {
    public_id: newFilename,
    folder: "Smartsaver",
  });

  console.log("result from cloudinary: ", result);

  response.status(200).json(result);
}
