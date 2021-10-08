const express=require("express")
const router=express.Router()
const {isAuth}=require('../middlewares/auth')
const {ProfileValidation,Validation}=require("../middlewares/validation")
const {addProfile, getProfile,deleteProfile,editProfile}=require('../controllers/profile')

router.post('/Profile',isAuth,ProfileValidation,Validation,addProfile) 
router.get('/ShowProfile',isAuth,getProfile)
// router.delete('/DeleteProfile',isAuth,deleteProfile)
router.put('/EditProfile',isAuth,editProfile)
module.exports=router 