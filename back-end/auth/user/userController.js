const USER = require('./userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
 module.exports={
         //get All user
    getUser:async(req,res)=>{
        try {
          const user = await USER.find();
          res.json(user);
      }
      catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
      },
      register:async(req,res)=>{
        USER.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(user) return  res.status(400).json({
                message:'Email already has used'
            });
            const hashedPassword =  bcrypt.hashSync(req.body.password, 10);
            const password = hashedPassword;
            const fullName = req.body.fullName
            const email = req.body.email
            const phone = req.body.phone
            const role = req.body.role

            const _user = new USER({
                fullName,
                email,
                phone,
                password,
                role
            })

            _user.save((error,data) =>{
                if(error){
                    return res.status(400).json({
                        message:'Somthing went wrong!'
                    })
                }
                if(data){
                    return res.status(201).json({
                        message:'User created Successfuly..!'  ,
                        data })

                }
            })
        });

    },
    signIn:async(req,res)=>{
        USER.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(error){
                return res.status(400).json({error}) }
                if(user){
                const comp= bcrypt.compare(user.password === req.body.password )
                if(comp)
                {
                        const token = jwt.sign({_id:user._id,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
                        const {_id, fullName,email,phone,role} = user
                        
                        res.status(200).json({
                           
                            token,
                            user:{
                                _id,fullName,email,phone,role
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
    } ,
          //delete user
          deleteUser:async(req,res)=>{
            try{
              const user = await USER.findByIdAndDelete(req.params.id)
            res.json(user)
            } catch (error) {
              console.error(error.message);
              res.status(500).send("server error");
            }
        },
                //update expert
                updateUser:async(req,res)=>{
                    try {
                      const user = await USER.findByIdAndUpdate(
                        req.params.id,
                        req.body,
                        { new: true }
                      );
                      res.json(user);
                    } catch (error) {
                      console.error(error.message);
                    }
                }
    

}