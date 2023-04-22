const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userCtrl");

router.post("/register", userCtrl.addUser);

router.get("/info/:id", userCtrl.getUserInfo);
router.put("/updateProfile/:id", userCtrl.updateUser);
router.put("/updateUser/:id", userCtrl.updateUserAdmin);

router.put("/updatePassword/:id", userCtrl.updatePassword);

module.exports = router;

