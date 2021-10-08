const Profile = require("../models/profile.js")
const User = require("../models/user.js")



//add profile =role prof

exports.addProfile= async (req,res)=>{
    const {mobile,school,section}=req.body 
    try {
 
        const found= await Profile.findOne({mobile})
        if (found){ return  res.status(400).send({msg:'cannot add another'})}

        let user=await User.findById(req.user._id)
        const AddProfile= new Profile({mobile,school,section, userId:req.user._id})
        await AddProfile.save()
        user.profile=AddProfile._id
        await user.save()
        res.status(200).send({msg:' profile is added',AddProfile})
          
      } catch (error) {
          res.status(500).send({msg:"profile not added"})
          
      }
   }

// get profile  =role prof

exports.getProfile= async (req,res)=>{
    try {
       
        const profile= await Profile.findOne({userId:req.user._id}).populate("userId")
        res.send({msg:"ok",profile})

    }catch (error) {
          res.status(500).send({msg:"error "})
          
      }
   }



//edit profile  =role prof

exports.editProfile= async (req,res)=>{
    const {mobile,school,section,firstname,lastname,password}=req.body 
    try {
          
        const editUser=await User.findOneAndUpdate({_id:req.user._id},{ $set:{firstname,lastname,password}})
        const editProfile= await Profile.findOneAndUpdate({userId:req.user._id},{ $set:{mobile,school,section,firstname,lastname,password}}).populate("userId")
        res.status(200).send({msg:' profile is updated',editProfile})    
      
    } catch (error) {
          res.status(500).send({msg:"profile not updated"})
          
      }
   }

   //delete profile  =role admin

exports.deleteProfile=async (req,res)=>{
    try{
       
        const deleted= await Profile.findByIdAndDelete({userId:req.user._id})
        res.status(200).send({msg:'user deleted'})
    
    }catch(error){
        res.status(500).send({msg:"could not deleted profile"})
    }
    
    }