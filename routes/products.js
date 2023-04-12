import express from "express";
import prices from "./prices.json" assert { type: "json" };
import products from "./products.json" assert { type: "json" };
const router = express.Router();
let productsWithPrices = products.map((product) => {
  const price = prices.find((price) => price.id === product.id);
  return { ...product, ...price };
});
/* GET products listing. */
router.get("/", function (req, res, next) {
  res.header("Content-Type", "application/json");
  //quiero mergear products y prices
  res.send(JSON.stringify(productsWithPrices));
  //res.json(data)
});
router.get("/hola", function (req, res) {
  res.send("Hola producto");
});
/* GET product listing. */
router.get("/:id", function (req, res) {
  const product = productsWithPrices.find(
    (product) => product.id === req.params.id
  );
  if (product) {
    // product.price = price.price;
    // mejor destructuring
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(product));
  } else {
    res.status(404).send("Not found");
  }
});
/*GET product listening by categrory*/
router.get("/category/:category", function (req, res) {
  const products = productsWithPrices.filter(
    (product) => product.masterCategory === req.params.category
  );
  if (products.length) {
    // product.price = price.price;
    // mejor destructuring
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(products));
  } else {
    res.status(404).send("Not found");
  }
});
router.delete("/:id", function (req, res) {
  const product = productsWithPrices.find(
    (product) => product.id === req.params.id
  );
  if (product) {
    const productsWithDelete = productsWithPrices.filter(
      (product) => product.id !== req.params.id
    );
    productsWithPrices = productsWithDelete;
    res.send("Deleted");
  } else {
    res.status(404).send("Not found");
  }
});
export default router;
