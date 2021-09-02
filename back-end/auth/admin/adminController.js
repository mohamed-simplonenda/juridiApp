const USER = require('../user/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports={
 
signIn:async(req,res)=>{
    USER.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            return res.status(400).json({error}) }
            if(user){
                if (req.body.password && user.role === 'admin'){
                    const token = jwt.sign({_id:user._id},'MEARNSECRET',{expiresIn:'1h'})
                    const {_id, fullName,email,phone,role} = user
                    res.status(200).json({
                        token,
                        user:{
                            _id,  fullName,email,phone,role
                        }
                    })
                }else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }

            }else{
                return res.status(400).json({message:'SomeThing went wrong !'})
            }
       
    })
}

}