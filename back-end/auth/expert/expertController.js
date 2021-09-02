const EXPERT = require('./expertModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
 module.exports={
    register:async(req,res)=>{
        EXPERT.findOne({email:req.body.email})
        .exec((error,expert)=>{
            if(expert) return  res.status(400).json({
                message:'Email already has used'
            });
            const hashedPassword =  bcrypt.hashSync(req.body.password, 10);
            const password = hashedPassword;
            const fullName = req.body.fullName
            const image = req.body.image
            const specialité = req.body.specialité
            const email = req.body.email
            const phone = req.body.phone
            const status = req.body.status
            const role = req.body.role

            const _expert = new EXPERT({
                fullName,
                image,
                phone,
                specialité,
                email,
                password,
                status,
                role
            })

            _expert.save((error,data) =>{
                if(error){
                    return res.status(400).json({
                        message:'Somthing went wrong!'
                    })
                }
                if(data){
                    return res.status(201).json({
                        message:'expert created Successfuly..!'  ,
                        data })

                }
            })
        });

    },
    signIn:async(req,res)=>{
        EXPERT.findOne({email:req.body.email})
        .exec((error,expert)=>{
            if(error){
                return res.status(400).json({error}) }
                if(expert){
                const comp= bcrypt.compare(expert.password === req.body.password )
                if(comp)
                {
                        const token = jwt.sign({_id:expert._id,role:expert.role},'MEARNSECRET',{expiresIn:'1h'})
            
                        
                        res.status(200).json({
                           
                            token,
                                          
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

            //get All expert
    getExpert:async(req,res)=>{
        try {
          const expert = await EXPERT.find();
          res.json(expert);
      }
      catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
      },


         //update expert
         updateExpert:async(req,res)=>{
            try {
              const expert = await EXPERT.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
              );
              res.json(expert);
            } catch (error) {
              console.error(error.message);
            }
        }
    

}