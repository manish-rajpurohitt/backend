const { getAllProducts } = require("../controllers/productController");

const express = require("express");
const router = express.Router();

router.route("/getAllProducts").get(getAllProducts);

module.exports = router;