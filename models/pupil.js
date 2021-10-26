const mongoose=require("mongoose")
const Pupil = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    civility:{type:String},
    classId:{type:mongoose.Schema.Types.ObjectId, ref:'Class'},
   
})
module.exports=mongoose.model("Pupil",Pupil)