const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
    role: {
      type: String,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
    },
    systemAdmin: {
      type: Boolean,
      default: false,
    },
    savedDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
