const express = require("express")
const User = require("../models/UserModel")
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
  // Checking for user 
  try {
    const { username, email, password, imageURL } = req.body;

    // Checking for existing user
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.json({ msg: "User already exists", existingUser });
    }

    // Creating a new user
    const createUser = await User.create({ username, email, password, imageURL });

    res.status(201).json({ msg: "User has been created", createUser });

    console.log(createUser);
  } catch (err) {
    res.json(err);
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username: username });

    if (existingUser && (await existingUser.isPasswordMatch(password))) {
      const token = jwt.sign({ id: existingUser._id }, "jwtkey");

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: true,
      }).status(200);

      res.json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        imageURL: existingUser.imageURL,
        msg: "You have successfully logged in",
        token: token,
      });
    } else {
      res.json({ msg: "Invalid credentials" });
      console.log("WRONG DETAILS");
    }
  } catch (err) {
    console.log("ERROR");
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.")
}


module.exports = { register, login, logout }


