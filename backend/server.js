const express = require("express");
const dotenv = require("dotenv");

const products = require("./data/products");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  console.log("APi is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id"),
  (req, res) => {
    const product = products.find((prod) => prod._id === +req.params.id);

    res.json(product);
  };

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
