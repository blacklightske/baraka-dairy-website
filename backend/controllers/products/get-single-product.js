import { StatusCodes } from "http-status-codes";
import ProductSch from "../../models/ProductSch.js";
import BadRequestError from "../../errors/bad-request.js";

const getSingleProductCtrl = async (req, res, next) => {
  try {
    const { slug } = req.query;

    const product = await ProductSch.findOne({ slug: slug });

    if (!product) throw new BadRequestError("This product does not exist");

    const similarProducts = await ProductSch.find({
      category: product.category,
    });
    //   .filter((p) => p.slug !== slug)
    //   .map((item, index, array) => ({ item, index }))
    //   .sort(() => Math.random() - 0.5)
    //   .map(({ item }) => item)
    //   .slice(0, 4);

    res
      .status(StatusCodes.OK)
      .json({ msg: "Request successful", product, similarProducts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getSingleProductCtrl;
