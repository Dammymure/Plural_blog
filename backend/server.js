const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const cookieParser = require("cookie-parser")

// Import each router
const postRouter = require("./routes/PostRoute")
const userRouter = require("./routes/UserRoute")
const authRouter = require("./routes/AuthRoute")

// Connect server to database
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
  console.log("Database is connected successfully");
 })
 .catch((err) => {
  console.log(err);
 })


// Cookie parser
app.use(cookieParser())

app.use(express.json())



// Cors middleware
app.use(cors())
// Middleware for router
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)


app.listen(8800, () => {
 console.log("Connected!");
})