const Purchasing = require("../models/Purchasing");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const purchasing = new Purchasing(req.body);
    await purchasing.save();
    res.status(201).json({
      message: "Purchasing created successfully",
      Purchasing,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Purchasing creation failed",
      error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const purchasing = await Purchasing.find();
    res.status(200).json(purchasing);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/increaseQty", async (req, res) => {
  try {
    const { productId } = req.body;
    const purchasing = await Purchasing.findOne({ productId });
    purchasing.quantity += 1;
    await purchasing.save();
    res.status(200).json(purchasing);
  } catch (err) {
    res.status(500).json({ message: "server error", err });
  }
});

router.post("/descrice", async (req, res) => {
  try {
    const { productId } = req.body;
    const purchasing = await Purchasing.findOne({ productId });
    purchasing.quantity -= 1;
    await purchasing.save();
    res.status(200).json(purchasing);
  } catch (err) {
    res.status(500).json({ message: "server error", err });
  }
});

router.delete("/clear", async (req, res) => {
  try {
    await Purchasing.deleteMany();
    res.status(200).json({ message: "Your Purchasing sheet is cleared" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
module.exports = router;
