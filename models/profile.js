const mongoose=require("mongoose")
const Profile = new mongoose.Schema({
   userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   mobile:{type:String,required:true},
   school:{type:String,required:true},
   section:{type:String,required:true}, 
   classes:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Class"
  }]


})
module.exports=mongoose.model("Profile",Profile)