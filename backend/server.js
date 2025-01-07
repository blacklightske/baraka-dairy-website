import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDb from "./Db/connectDb.js";
import RecRoutes from "./routes/RecRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import ProductRoute from "./routes/ProductRoutes.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

const app = express();
dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 5002;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// routes
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);
app.use("/api/Milk", RecRoutes);

app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_DB_URI);

    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
