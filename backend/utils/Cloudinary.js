import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const ImageUploader = async (file, folder) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: folder,
  };

  let imageCredentials = {};

  try {
    const result = await cloudinary.uploader.upload(file, options);

    imageCredentials = {
      imageUrl: result?.url,
      id: result?.public_id,
    };
  } catch (error) {
    console.log(error);
  }

  return imageCredentials;
};
