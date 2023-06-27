const express = require("express")
const Post = require("../models/PostModel")

const addPost = (req, res) => {
 res.json("This is coming from the controller")
}


module.exports = {addPost}