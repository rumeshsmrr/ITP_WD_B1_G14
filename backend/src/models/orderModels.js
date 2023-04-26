const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerID: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    products: [
      {
        productName: {
          type: String,
          required: true,
        },
        cover: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["placed", "processed", "delivering", "delivered"],
      default: "placed",
      required: true,
    },
    address: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
