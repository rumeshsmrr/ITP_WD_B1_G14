const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userCtrl");

router.post("/register", userCtrl.addUser);

router.put("/updateProfile/:id", userCtrl.updateUser);
router.put("/updateUser/:id", userCtrl.updateUserAdmin);


module.exports = router;

