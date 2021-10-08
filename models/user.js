const mongoose=require("mongoose")
const User = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String, required:true , enum:['Admin','Prof'] },
    profile:{type:mongoose.Schema.Types.ObjectId, ref:'Profile'}
})
module.exports=mongoose.model("User",User)