const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProduct);
router.get("/:sku", productController.getProductBySky);

module.exports = router;
