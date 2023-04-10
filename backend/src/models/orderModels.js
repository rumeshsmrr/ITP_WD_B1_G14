const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "customerSchema",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "productSchema",
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
      enum: ["placed", "processed", "shipped", "delivered"],
      default: "placed",
      required: true,
    },
    address: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
