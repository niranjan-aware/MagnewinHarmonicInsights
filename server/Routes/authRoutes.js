const express=require('express')
const router =express.Router()
const authControllers=require('../Controllers/auth/authController')
const auth=require('../middleware/auth')


// router.post('/authRoutes',(req,res)=>{
//     res.send(' authRoutes Routers working fine')
// })
const validator=require('express-joi-validation').createValidator({});
const Joi=require('joi')

const registerSchema=Joi.object({
    username:Joi.string().min(3).max(12).required(),
    password:Joi.string().min(6).max(12).required(),
    email:Joi.string().email().required(),
    confirm_password:Joi.string().min(6).max(12).required(),
})

const loginSchema=Joi.object({
    password:Joi.string().min(6).max(12).required(),
    username:Joi.string().min(3).max(12).required(),
})

router.post('/register',validator.body(registerSchema),authControllers.controllers.postRegister)

router.post('/login',validator.body(loginSchema),authControllers.controllers.postLogin)  

// toekn test route if our middleware working

router.get('/test',auth,(req,res)=>{
    res.send('request passed')
})


module.exports=router;