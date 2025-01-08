import express from "express";
import RegisterUser from "../controllers/RegisterUser.js";
import LoginUser from "../controllers/LoginUser.js";
import mpesaStkPush from "../controllers/m-pesa/m-pesa-stk-push.js";
import getAccesToken from "../controllers/m-pesa/get-access-token.js";

const router = express.Router();

// User Registration route
router.route("/register").post(RegisterUser);

// User Login route
router.route("/login").post(LoginUser);

// Mpesa STK Push routes (optional, related to payments)
router.post("/stkPush", getAccesToken, mpesaStkPush);

export default router;
