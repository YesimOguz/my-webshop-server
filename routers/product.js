const express = require("express");
const { Router } = express;
const router = new Router();
const product = require("../models").product;
//const category = require("../models").category;

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await product.findAll();
    res.status(200).send(allProducts);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const specificProduct = await product.findByPk(id);
    if (!specificProduct) {
      res.status(404).send("product does not exist");
    } else {
      res.status(200).send(specificProduct);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
