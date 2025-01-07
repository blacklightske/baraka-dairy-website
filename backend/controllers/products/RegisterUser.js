import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import AttachCookie from "../utils/AttachCookie.js";

const RegisterUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide all values" });
      return;
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already exists" });
      return;
    }

    const user = await User.create({ fullName, email, password });

    const token = user.createJWT();
    AttachCookie({ res, token });

    res.status(StatusCodes.CREATED).json({
      user: {
        fullName: user.fullName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred while registering" });
  }
};

export default RegisterUser;
