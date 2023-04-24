const express = require("express");
const router = express.Router();
const attendanceCtrl = require("../controller/attendanceCtrl");

router.post("/", attendanceCtrl.addAttendance);
router.get("/:userID", attendanceCtrl.getAttendance);

module.exports = router;
