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
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;