import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Specify storage engine
const currentDir = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(currentDir, "../uploads"));
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// Image file validation
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb({ message: "unsupported file format" }, false);
  }
};

// upload the file
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 },
  fileFilter: fileFilter,
});

export default upload;
