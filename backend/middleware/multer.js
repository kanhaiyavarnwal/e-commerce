import multer from "multer";
import path from "path";
import fs from "fs";

// const uploadDir = path.join(process.cwd(), "uploads");
const uploadDir = process.env.VERCEL
  ? "/tmp/uploads"
  : path.join(process.cwd(), "uploads");

//  create folder if not exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); //
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },

  
});

const upload = multer({ storage });

export default upload;


