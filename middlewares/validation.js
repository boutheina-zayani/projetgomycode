const { body, validationResult } = require('express-validator');

exports.SignUpValidation=[
    body('firstname','الرجاء اضافة الإسم ').notEmpty(),
    body('lastname','الرجاء اضافة اللقب ').notEmpty(),
    body('email','الرجاء اضافة بريد الكتروني صحيح ').notEmpty().isEmail(),
    body('password',' الرجاء ادخال كلمة سر لا تقل عن حروف').notEmpty().isLength({ min: 5 })
]

exports.SignInValidation=[
    body('email','بيانات الاعتماد غير صالحة ').notEmpty().isEmail(),
    body('password',' بيانات الاعتماد غير صالحة').notEmpty().isLength({ min: 5 })
]




exports.ProfileValidation=[
    body('mobile','الرجاء اضافة رقم الهاتف ').notEmpty(),
    body('school','الرجاء اضافة المدرسة ').notEmpty(),
    body('section','الرجاء اضافة  الدائرة ').notEmpty()
  
]



exports.Validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).send({errors:errors.array()})
        }
    next()
}