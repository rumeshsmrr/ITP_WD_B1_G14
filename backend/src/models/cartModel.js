const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customers",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "producths",
      required: true,
    },
    productName: {
      type: String,
      // required: true,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    productCover: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
