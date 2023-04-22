const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/userCtrl");

router.post("/register", userCtrl.addUser);
router.post("/login", userCtrl.login);

router.get("/info/:id", userCtrl.getUserInfo);
router.get("/allusers", userCtrl.allUsers);
router.delete("/:id", userCtrl.deleteUser);
router.put("/updateProfile/:id", userCtrl.updateUser);
router.put("/updateUser/:id", userCtrl.updateUserAdmin);

router.put("/updatePassword/:id", userCtrl.updatePassword);

module.exports = router;

