const mongoose=require("mongoose")
const Class = new mongoose.Schema({
    nameClass:{type:String,required:true},
    orderClass:{type:String,required:true},
    profileId: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
    pupils: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Pupil"
    }]
})
module.exports=mongoose.model("Class",Class)