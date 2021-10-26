const express=require("express")
const router=express.Router()
const {isAuth}=require('../middlewares/auth')
// const {ProfileValidation,Validation}=require("../middlewares/validation")
 const {addClass,editClass,getClasses,showOneClass,deleteClass}=require('../controllers/classe')

router.post('/AddClasse',isAuth,addClass) 
router.put('/EditClasse',isAuth,editClass)
router.get('/ShowClasses',isAuth,getClasses)
router.get('/:ID',showOneClass)
router.delete('/:ID',deleteClass)

module.exports=router 