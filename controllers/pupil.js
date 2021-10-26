const Pupil = require("../models/pupil.js")
const Class = require("../models/classe.js")

exports.addPupil= async (req,res)=>{
    const {ID}=req.params

    const {firstname,lastname,civility,classId}=req.body 
    try {
        const  classe = await Class.findById(ID)
       
        const AddPupil= new Pupil({firstname,lastname,civility,classId:classe._id})
        await AddPupil.save()
       

        classe.pupils=[...classe.pupils, AddPupil]
        await classe.save()
      
        res.status(200).send({msg:' pupil is added',AddPupil})
          
      } catch (error) {
          res.status(500).send({msg:"pupil not added"})
          
      }
   }



   //edit pupil

   exports.editPupil= async (req,res)=>{
    const {ID}=req.params

    const {firstname,lastname,civility}=req.body 
    try {

        const EditPupil= await Pupil.findOneAndUpdate({_id:ID},{ $set:{firstname,lastname,civility}})
        
        res.status(200).send({msg:'pupil is updated',EditPupil})    
      
    } catch (error) {
          res.status(500).send({msg:"pupil not updated"})
          
      }
   }

  //show all pupils of one class

  exports.getPupils= async (req,res)=>{
    const {ID}=req.params
    try {

        const  classe = await Class.findById(ID)
        const showPupils= await Pupil.find({classId:classe._id})
        res.send({msg:"ok",showPupils})

    }catch (error) {
          res.status(500).send({msg:"error"})
          
      }
   }

   //delete one pupil 
 exports.deletePupil= async (req,res)=>{
    const {ID}=req.params
    try {
        const classe = await Class.findOne({pupils:ID})
 const deleted= await Pupil.findByIdAndDelete(ID)
const upClass=  await Class.updateOne({pupils:ID},{$pull:{pupils:ID}})

      console.log(upClass)
   
      
       
       res.status(200).send({msg:'pupil deleted',classe})
       console.log(deleted)
 
    } catch (error) {
       res.status(500).send({msg:"could not deleted pupil"})
       
    }
 }  