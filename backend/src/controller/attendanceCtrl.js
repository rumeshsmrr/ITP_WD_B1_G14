const Attendance = require("../models/Attendance");

const addAttendance = async (req, res) => {
  const userID = req.body.userID;

  try {
    //create a new attendance
    const newAttendance = new Attendance({
      userID,
    });

    //save the attendance
    await newAttendance.save();
    res.json({
      data: newAttendance,
      msg: "Attendance added successfully!",
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAttendance = async (req, res) => {
  userID = req.params.userID;

  try {
    //get the attendance of the user and convert date time to local time
    const attendance = await Attendance.find({ userID: userID })
      .sort({ createdAt: -1 })
      .exec();
    res.json(attendance);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addAttendance,
  getAttendance,
};
