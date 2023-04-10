const express = require("express");
const { verifyToken, verifyTokeAndAuth } = require("./verifyToken");
const Customer = require("../models/Customer");
const router = express.Router();

//UPDATE
router.put("/:id", verifyTokeAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokeAndAuth, async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user
router.get("/find/:id", verifyTokeAndAuth, async (req, res) => {
  try {
    await Customer.findById(req.params.id);
    const { password, ...others } = Customer._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const customer = query
      ? await Customer.find().sort({ _id: -1 }).limit(2)
      : await Customer.find();
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//test
router.get("/custest", (req, res) => {
  res.send("Customer Successfull");
});

module.exports = router;
