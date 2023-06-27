const mongoose = require('mongoose')
// const bcrypt = require("bcryptjs")

const postSchema = new mongoose.Schema({
 title: {
  type: String,
  required: [true, "Please enter title"]
 },
 description: {
  type: String,
  required: [true, "Please enter Description"]
 },
 imageURL: {
  type: String,
  required: [true, "Please enter image"]
 },
 UserID: {
  type: Number,
  required: [true, "Please enter image"]
 }
},
 {
  timestamps: true,
 }
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post