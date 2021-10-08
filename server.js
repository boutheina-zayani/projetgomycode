const express=require("express")
const ConnectDb = require("./config/ConnectDb")
const AuthRouter = require("./routes/auth")
const ProfileRouter = require("./routes/profile")

const app=express()
require("dotenv").config()



ConnectDb()
app.use(express.json())
app.use('/api/Users',AuthRouter)
app.use('/api/Profiles',ProfileRouter)

app.listen(process.env.port,()=>console.log(`server is running ${process.env.port}`))