const Profile = require("../models/profile.js")
const Class = require("../models/classe.js")

exports.addClass= async (req,res)=>{
    const {nameClass,orderClass}=req.body 
    try {
 
        let profile=await Profile.findOne({userId:req.user._id})
       
        const AddClass= new Class({nameClass,orderClass,profileId:profile._id})
        await AddClass.save()

        profile.classes=[...profile.classes, AddClass]
        await profile.save()
      
        res.status(200).send({msg:' class is added',AddClass})
          
      } catch (error) {
          res.status(500).send({msg:"class not added"})
          
      }
   }

   exports.editClass= async (req,res)=>{
    const {nameClass,orderClass}=req.body 
    try {
          
        let profile=await Profile.findOne({userId:req.user._id})
        const editClass= await Class.findOneAndUpdate({profileId:profile._id},{ $set:{nameClass,orderClass}})

        res.status(200).send({msg:'class is updated',editClass})    
      
    } catch (error) {
          res.status(500).send({msg:"class not updated"})
          
      }
   }

//get all class

   exports.getClasses= async (req,res)=>{
    try {

       let profile=await Profile.findOne({userId:req.user._id})
        const showClass= await Class.find({profileId:profile._id}).populate("profileId")
        res.send({msg:"ok",showClass})

    }catch (error) {
          res.status(500).send({msg:"error"})
          
      }
   }


// get one class 
exports.showOneClass=async (req,res)=>{
    const {ID}=req.params
    try {
       const getOne= await Class.findById(ID)
       res.status(200).send({msg:'show one class',getOne})
    } catch (error) {
       res.status(500).send({msg:"could not show class"})
       
    }
 }

 //delete one classe 
 exports.deleteClass= async (req,res)=>{
    const {ID}=req.params
    try {
      
       const deleted= await Class.findByIdAndDelete(ID)
       res.status(200).send({msg:'class deleted'})
 
    } catch (error) {
       res.status(500).send({msg:"could not deleted class"})
       
    }
 }
 