const express = require("express")
require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
require("./models/db");
const registerRouter = require("./routes/Register")
const postsRouter = require("./routes/posts")
const loginRouter =require("./routes/login")



app.use("/register",registerRouter)
app.use("/posts",postsRouter)
app.use("/login",loginRouter)




app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})