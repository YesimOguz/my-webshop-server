const express = require("express");
const { Router } = express;
const router = new Router();
const category = require("../models").category;

router.get("/", async (req, res, next) => {
  try {
    const categories = await category.findAll();
    res.status(200).send(categories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
