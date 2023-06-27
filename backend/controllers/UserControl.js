const express = require("express")
const Post = require("../models/UserModel")

const addUser = (req, res) => {
 res.json("This is USER is coming from the controller")
}


module.exports = { addUser }