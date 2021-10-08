
const User = require("../models/user.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.SignUp=async (req,res)=>{
  
    const {firstname,lastname,email,password}=req.body;
    
    
    try {

        const user_exist = await User.findOne({email})

        if (user_exist){return res.status(400).send({errors:[{msg:"user already exist "}]})}

        const new_user=new User({firstname,lastname,email,password,role:"Prof"})
        // secretOrPrivateKey
        
        const salt =10; 
        const hashed = await bcrypt.hashSync(password,salt)
        new_user.password = hashed

        await new_user.save()

        const  payload={id:new_user._id}
        const token = jwt.sign(payload,process.env.secretOrPrivateKey)
         

        

        res.status(200).send({msg:"user registred with success",new_user,token})

    } catch (error) {

        res.status(500).send({errors:[{msg:"could not register"}]})
    }

}

exports.SignIn=async (req,res)=>{
    const {email,password}=req.body;

    try {
        const found_user = await User.findOne({email})
        if (!found_user){return res.status(400).send({errors:[{msg:"This user does not exist "}]})}

        const match = await bcrypt.compare(password,found_user.password);
        if(!match){return res.status(400).send({errors:[{msg:"bad credentials"}]}) }

        const  payload={id:found_user._id}
        const token = jwt.sign(payload,process.env.secretOrPrivateKey)

        res.status(200).send({msg:"signed in with success",found_user,token})


        
    } catch (error) {
         res.status(500).send({errors:[{msg:"could not sign in "}]})
    }

}

