const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Attendance = mongoose.model("attendance", AttendanceSchema);
module.exports = Attendance;
