const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
const savedDate = date.toString();

//Add an user
const addUser = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const salary = req.body.salary;
  const role = req.body.role;

  try {
    if (!userName || !password || !salary || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    //check if the username already exists
    const user = await User.findOne({ userName: userName });

    if (user) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    //hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    //create a new user
    const newUser = new User({
      userName,
      password: passwordHash,
      salary,
      role,
      savedDate,
    });

    //save the user
    await newUser.save();
    res.json({
      result: newUser,
      msg: "Registration Successfull.Please login to continue!",
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//update an user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const age = req.body.age;
  const sex = req.body.sex;
  const pNumber = req.body.pNumber 
  const nic = req.body.nic 

  //convert id to object id
  const O_id = mongoose.Types.ObjectId(id);

  try {
    const existUser = new User({
      _id: O_id,
      name,
      address,
      age,
      sex,
      pNumber,
      nic,
      
    });

    //update the user
    await User.findOneAndUpdate({ _id: O_id }, existUser);
    res.json({ msg: "Profile updated successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//update an user admin side
const updateUserAdmin = async (req, res) => {
  const id = req.params.id;
  const role = req.body.role;
  const salary = req.body.salary;

  //convert id to object id
  const O_id = mongoose.Types.ObjectId(id);

  try {
    const existUser = new User({
      _id: O_id,
      role,
      salary,
    });

    //update the user
    await User.findOneAndUpdate({ _id: O_id }, existUser);
    res.json({ msg: "Profile updated successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//update password
const updatePassword = async (req, res) => {
  const id = req.params.id;
  const currentPsw = req.body.currentPsw;
  const newPassword = req.body.newPassword;

  //get current password from db

  try {
    //get user password from the id
    const user = await User.findOne({ _id: id });
    console.log("user", user.password);
    //check if the current password is correct
    const isMatch = await bcrypt.compare(currentPsw, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Current password is incorrect" });
    }

    //convert id to object id
    const O_id = mongoose.Types.ObjectId(id);

    //hash the password
    const passwordHash = await bcrypt.hash(newPassword, 12);

    try {
      const data = new User({
        _id: O_id,
        password: passwordHash,
      });

      //update the user
      await User.findOneAndUpdate({ _id: O_id }, data);
      res.json({ msg: "Password updated successfully!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//Login an user
const login = async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;

  try {
    if (!userName || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    //check if the username already exists
    const user = await User.findOne({ userName: userName });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist in the system" });
    }

    //check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({ data: user, msg: "Login success!" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({ msg: err.message });
  }
};

//get user info
const getUserInfo = async (req, res) => {
  console.log("req.body.id", req.params.id);
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const allUsers = async (req, res) => {
  User.find({ systemAdmin: false }).exec((err, Users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUser: Users,
    });
  });
};

//delete an user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "Profile Deleted!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//get user registration monthly report
const userRegistrationMonthlyReport = async (req, res) => {
  var yearDate = req.params.yearDate;
  yearDate = yearDate.toString();
  console.log("yearDate", yearDate);
  User.find({ savedDate: { $regex: ".*" + yearDate + ".*" } }).exec(
    (err, Users) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        userRecord: Users,
      });
    }
  );
};

//create access token
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

//create a refresh token
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  addUser,
  login,
  getUserInfo,
  allUsers,
  deleteUser,
  userRegistrationMonthlyReport,
  updateUser,
  updateUserAdmin,
  updatePassword,
};