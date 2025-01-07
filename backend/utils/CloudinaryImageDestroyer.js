import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const CloudinaryImageDestroyer = async (imageId) => {
  if (imageId === "w2iewy0nbrglimrsqpyd") return;

  await cloudinary.uploader.destroy(imageId, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};
