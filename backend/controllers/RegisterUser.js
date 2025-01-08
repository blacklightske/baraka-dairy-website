import User from "../models/User.js"; // Import User model
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User controller
const RegisterUser = async (req, res) => {
  const { firstName, secondName, nationalId, email, password } = req.body;

  try {
    // Check if user with the same email or national ID already exists
    const existingUser = await User.findOne({ $or: [{ email }, { nationalId }] });

    if (existingUser) {
      return res.status(400).json({ message: "Email or National ID already in use." });
    }

    // Create a new user object
    const user = new User({
      firstName,
      secondName,
      nationalId,
      email,
      password,
    });

    // Save user to the database
    await user.save();

    // Return a success response
    res.status(201).json({ message: "User registered successfully." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

export default RegisterUser;
