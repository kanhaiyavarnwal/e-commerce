// import multer from "multer";
// import path from "path";
// import fs from "fs";

// const uploadDir = path.join(process.cwd(), "uploads");

// //  create folder if not exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir); //
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },

  
// });

// const upload = multer({ storage });

// export default upload;


import multer from "multer";

// Store uploaded files in memory instead of /uploads folder
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
});

export default upload;
