const express=require("express")
const router=express.Router()
 const {addPupil,editPupil,getPupils,deletePupil}=require('../controllers/pupil')

router.post('/:ID',addPupil) 
router.put('/:ID',editPupil)
router.get('/:ID',getPupils)
router.delete('/:ID',deletePupil)

module.exports=router 