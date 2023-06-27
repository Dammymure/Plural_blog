const express = require('express')
const router = express.Router()
const {addPost} = require("../controllers/PostControl")



router.get("/test", addPost)

module.exports =  router