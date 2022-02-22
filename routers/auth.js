const express = require("express");
const { Router } = express;
const router = new Router();
const user = require("../models").user;
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      res.status(400).send("please enter email and password");
    } else {
      const oneUser = await user.findOne({ where: { email: email } });
      if (!oneUser) {
        res.status(404).send("user does not exist");
      } else {
        if (!bcrypt.compareSync(password, oneUser.password)) {
          res.status(400).send("password does not match");
        } else {
          const token = toJWT({ id: oneUser.id });
          res.send(token);
        }
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
