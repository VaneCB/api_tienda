import express from "express";
import products from "./products.json" assert { type: "json" };

const router = express.Router();

/* GET products listing. */
router.get("/", function (req, res, next) {
  const categories = products.map((product) => product.masterCategory);
  const uniqueCategories = [...new Set(categories)];
  //res.header("Content-Type", "application/json");
  //res.send(JSON.stringify({ categories: uniqueCategories }));
  //res.json(data)
  res.json({ categories: uniqueCategories });
});

export default router;
