const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel");

// Add item to cart
router.post("/addToCart", async (req, res) => {
  try {
    const { customerId, productId, productName, quantity, productCover } =
      req.body;
    const cartItem = await Cart.findOne({ customerId, productId });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
      res.status(200).json({ message: "Item added to cart" });
    } else {
      const newCartItem = new Cart({
        customerId,
        productId,
        productName,
        quantity,
        productCover,
      });
      await newCartItem.save();
      res.status(200).json({ message: "Item added to cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Remove item from cart
router.delete("/delete/:cartItemId", async (req, res) => {
  try {
    const { cartItemId } = req.params;
    await Cart.findByIdAndDelete(cartItemId);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update item quantity in cart
router.put("/update/:cartItemId", async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(
      cartItemId,
      { quantity },
      { new: true }
    );
    res.status(200).json({ message: "Cart updated", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// //clear all item of user
// router.delete("/clear/:customerId", async (req, res) => {
//   try {
//     await Cart.find({ customerId: req.params.customerId });
//     res.status(200).json({ message: "Your cart is clear" });
//   } catch (err) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// Get cart items for a user
router.get("/:customerId", async (req, res) => {
  try {
    // const { customerId } = req.params.customerId;
    const cartItems = await Cart.find({ customerId: req.params.customerId });
    res.status(200).json({ cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//clear all cart items of a customer
router.delete("/clear/:customerId", async (req, res) => {
  try {
    await Cart.deleteMany({ customerId: req.params.customerId });
    res.status(200).json({ message: "Your cart is cleared" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
