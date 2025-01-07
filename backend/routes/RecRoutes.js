import express from "express";
import createMilkRecordCtrl from "../controllers/products/create-milkRec.js";
const router = express.Router();

router.route("/").post(createMilkRecordCtrl);



export default router;
