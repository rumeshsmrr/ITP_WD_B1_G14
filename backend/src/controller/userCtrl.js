const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");


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



  module.exports = {
    addUser
  };