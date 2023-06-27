const express = require('express')
const router = express.Router()
const { addUser } = require("../controllers/UserControl")



router.get("/user", addUser)

module.exports = router