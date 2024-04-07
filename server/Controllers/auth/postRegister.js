const User=require('../../Models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const postRegister=async (req,res)=>{

    try {
        const{email,username,password,confirm_password}=req.body
        const usereExists=await User.exists({email:email.toLowerCase()})
//usereExists
        if(usereExists){
            return  res.status(200).send('User Already Registered')
        }
//saving data on db
        else{
            // console.log(username);
            const encryptedPassword=await bcrypt.hash(password,10)
            const encryptedConfirmPassword=await bcrypt.hash(confirm_password,10)
            const user=await User.create({
                email:email.toLowerCase(),
                username,
                password:encryptedPassword,
                confirm_password:encryptedConfirmPassword,
            })
//creating JWT
            const token=jwt.sign(
                {
                userId:user._id,
                email
                },
              process.env.TOKEN_KEY, {
                expiresIn:"24h"
              }
            )
            return res.status(200).json({
               userDetails:{
                username,
                email:email.toLowerCase(),
                password:encryptedPassword,
                token:token
               }
            })
        }
    } catch (error) {
        return res.status(500).send('Error Ocurred. Please try again')
    }
}

module.exports=postRegister