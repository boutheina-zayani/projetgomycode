const express=require("express")
const { SignUp, SignIn } = require("../controllers/auth")
const { isAuth } = require("../middlewares/auth")
const { SignUpValidation, Validation, SignInValidation } = require("../middlewares/validation")
const router=express.Router()

 router.post("/SignUp",SignUpValidation,Validation,SignUp)
router.post("/SignIn",SignInValidation,Validation,SignIn)
router.get("/Current",isAuth,(req,res)=>res.send({user:req.user}))

module.exports =router