import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) res.send(product);
//   else res.status(404).send({ msg: "Product Not found." });
// });

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
