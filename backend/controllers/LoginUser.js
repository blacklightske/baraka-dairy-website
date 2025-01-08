import User from "../models/User.js"; // Import User model
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Login User controller
const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate a JWT token
    const token = user.createJWT();

    // Return the token as part of the response
    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login." });
  }
};

export default LoginUser;
