import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import ProductModel from "../models/productModel.js";
import data from "../data.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
    const createdProducts = await ProductModel.insertMany(data.products);
    res.send({ createdProducts });
  })
);

export default userRouter;
