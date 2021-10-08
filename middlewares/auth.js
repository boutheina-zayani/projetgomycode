const jwt =require("jsonwebtoken")
const user = require("../models/user")
exports.isAuth=async (req,res,next)=>{
    const token=req.header("Authorization")
    try {
        
      if(!token){return res.status(401).send("not authorized")}
      const decoded = jwt.verify(token,process.env.secretOrPrivateKey)
      // console.log(decoded)
      const user_auth=await user.findById(decoded.id)
      req.user=user_auth
      next()


    } catch (error) {
        res.status(500).send("server error")
    }
}