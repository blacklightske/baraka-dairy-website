import { StatusCodes } from "http-status-codes";
import ProductSch from "../../models/ProductSch.js";
import BadRequestError from "../../errors/bad-request.js";

const deleteProductCtrl = async (req, res, next) => {
  try {
    const { slug } = req.query;

    if (!(await ProductSch.findOne({ slug })))
      throw new BadRequestError("This product does not exist");

    await ProductSch.findOneAndDelete({ slug: slug });

    res.status(StatusCodes.OK).json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default deleteProductCtrl;
