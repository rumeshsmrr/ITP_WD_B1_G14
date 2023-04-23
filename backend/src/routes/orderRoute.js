const Order = require("../models/orderModels");
const { verifyToken, verifyTokenAndAuth } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Order creation failed",
      error,
    });
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:customerId", async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.params.customerId,
    }).populate("customer products.product");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/find/:customerId", async (req, res) => {
//   // const qNew = req.query.new;
//   const qStatus = req.query.status;
//   try {
//     let orders;

//     if (qStatus) {
//       orders = await Order.find({
//         status: {
//           $in: [qStatus],
//         },
//       }).populate("customer products.product");
//     } else {
//       orders = await Order.find({
//         customer: req.params.customerId,
//       }).populate("customer products.product");
//     }

//     res.status(200).json(orders);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("customer products.product");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME

router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
