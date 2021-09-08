import express from "express";
import data from "./data.js";

const app = express();
app.get("/api/product/:id", (req, res) => {
  const products = data.products.find((x) => x._id === req.params.id);
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`severd at http://localhost:${port}`);
});
