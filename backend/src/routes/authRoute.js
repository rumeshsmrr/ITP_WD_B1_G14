const express = require("express");
const Customer = require("../models/Customer");
const router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newCustomer = new Customer({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    // contactNo: req.body.contactNo,
  });
  try {
    const savedCustomer = await newCustomer.save();
    res.status(200).json(savedCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const customer = await Customer.findOne({
      username: req.body.username,
    });
    if (!customer) {
      res.status(401).json("Wrong credentials");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        customer.password,
        process.env.PASS_SEC
      );

      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (OriginalPassword !== req.body.password) {
        res.status(401).json("Wrong credentials");
      } else {
        const accessToken = jwt.sign(
          {
            id: customer._id,
          },
          process.env.JWT_SEC,
          { expiresIn: "7d" }
        );
        const { password, ...others } = customer._doc;
        res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
