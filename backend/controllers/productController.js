import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import { asyncHandler } from "../utils/Asynchandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/ApiError.js";

// function for add product

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, subCategory, sizes, bestSeller } =
    req.body;

  const image1 = req.files.image1 && req.files.image1[0];
  const image2 = req.files.image2 && req.files.image2[0];
  const image3 = req.files.image3 && req.files.image3[0];
  const image4 = req.files.image4 && req.files.image4[0];

  const images = [image1, image2, image3, image4].filter(
    (item) => item !== undefined,
  );

  let imagesUrl = await Promise.all(
    images.map(async (item) => {
      let result = await cloudinary.uploader.upload(item.path, {
        resource_type: "image",
      });
      return result.secure_url;
    }),
  );

  const productData = {
    name,
    description,
    category,
    price: Number(price),
    subCategory,
    bestSeller: bestSeller === "true" ? true : false,
    sizes: JSON.parse(sizes), // we cant send array as a string thats why i am use this  JSON.parse is use then the
    image: imagesUrl,
    date: Date.now(),
  };

  const product = new productModel(productData);
  await product.save();
  res.json(new ApiResponse(200, {}, "Product added"));
});



const listProduct = asyncHandler(async (req, res) => {
  const products = await productModel.find({});

  res.json(new ApiResponse(200, products, "Product list"));
});

const singleProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const product = await productModel.findById(productId);

  if (!product) {
    return res.json(new ApiError(403, {}, "invalid message"));
  }

  res.json(new ApiResponse(201, product, ""));
});

const removeProduct = asyncHandler(async (req, res) => {
  await productModel.findByIdAndDelete(req.body.id);
  res.json(new ApiResponse(201, {}, "product remove"));
});

export { listProduct, addProduct, removeProduct, singleProduct };
