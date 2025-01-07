import ProductSch from "../../models/ProductSch.js";
import slugify from "slugify";
import { StatusCodes } from "http-status-codes";
import axios from "axios";

const createProductCtrl = async (req, res, next) => {
  try {
    const product = req.body;

    // generate slug
    product.slug = slugify(
      product.name + " - " + new Date(Date.now()).toISOString()
    );

    //post cover image and save the response url
    if (product.cover_image) {
      const cover_image_url = await axios.post(
        "https://files.rentnasi.com/upload/create",
        { image: product.cover_image }
      );
      product.cover_image = cover_image_url.data.urls;
    }

    // post other images if available and save image urls
    if (product.other_images.length !== 0) {
      const other_images_urls = await axios.post(
        "https://files.rentnasi.com/upload/create/multiple",
        {
          images: product.other_images,
        }
      );
      product.other_images = other_images_urls.data.urls;
    }

    const newProduct = await ProductSch.create(product);

    res
      .status(StatusCodes.OK)
      .json({ msg: "Request processed successfull", product: newProduct });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default createProductCtrl;
