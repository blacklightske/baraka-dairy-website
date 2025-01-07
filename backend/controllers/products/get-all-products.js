import { StatusCodes } from "http-status-codes";
import ProductSch from "../../models/ProductSch.js";

const getAllProductsCtrl = async (req, res, next) => {
  try {
    const products = await ProductSch.find();
    //   .map((item, index, array) => ({ item, index }))
    //   .sort(() => Math.random() - 0.5)
    //   .map(({ item }) => item);

    res.status(StatusCodes.OK).json({ msg: "Request success", products });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getAllProductsCtrl;
