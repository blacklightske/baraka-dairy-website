import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import AttachCookie from "../utils/AttachCookie.js";

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all values" });
      return;
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User does not exist" });
      return;
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    const token = user.createJWT();
    AttachCookie({ res, token });

    user.password = undefined;

    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while registering" });
  }
};

export default LoginUser;
