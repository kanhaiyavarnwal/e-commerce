import userModel from "../models/userSchema.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/Asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { mailSender } from "../utils/mailSender.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User doesnt exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const token = createToken(user._id);

    res.json(
      new ApiResponse(201, token, ""),
      //     {
      //     success:true,
      //     token,
      // }
    );
  } else {
    throw new ApiError(403, "password is incorrect");
 
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  // check user exist or not
  const exists = await userModel.findOne({ email });
  if (exists) {
    throw new ApiError(409, "User already exists");
  }
  // validate email and password
  if (!validator.isEmail(email)) {
    throw new ApiError(401, {}, "Pleas enter a valid email");

   
  }
  if (password.length < 8) {
    throw new ApiError(402, "passsword must be atleast 8 character");
  }
  // hashing user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new userModel({
    name,
    email,
    password: hashedPassword,
  });

  const user = await newUser.save();

  const token = createToken(user._id);
    await mailSender(user.email, 
    "Welcome to our E-commerce Platform", 
    `<h1>Welcome ${user.name}!</h1><p>Thank you for registering with us. We're excited to have you on board and look forward to providing you with the best shopping experience.</p>`);
  res.json(
    new ApiResponse(200, token, "Account created successfully"),

   
  );
  console.log(newUser);
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(email + password, process.env.JWT_SECRET);
    console.log(token);
    res.json(new ApiResponse(200, token, "admin logged in"));
  } else {
    throw new ApiError(401, "email or password is not match");
  }
});

export { loginUser, registerUser, adminLogin };
