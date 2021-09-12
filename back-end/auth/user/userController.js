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
                    //get one user
                    getUsersById:async(req,res)=>{
                        try {
                          const user = await USER.findById(req.params.id);
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
            const specialité = req.body.specialité
            const description = req.body.description
            const image = req.body.image 
            const status = req.body.status

            const _user = new USER({
                image,
                fullName,
                email,
                phone,
                password,
                description,
                specialité,
                status,
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
    // signIn:async(req,res)=>{
    //     USER.findOne({email:req.body.email})
    //     .exec((error,user)=>{
    //         if(error){
    //             return res.status(400).json({error}) }
    //             if(user){
    //             const comp= bcrypt.compare(req.body.password, user.password   )
    //             if(comp)
    //             {
    //                     const token = jwt.sign({_id:user._id,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
    //                     const {_id, image,fullName,email,phone,specialité,description,status,role} = user
                        
    //                     res.status(200).json({
                           
    //                         token,
    //                         user:{
    //                             _id,image,fullName,email,phone,specialité,description,status,role
    //                         }
                                          
    //                     })
    //                 }else{
    //                     return res.status(400).json({
    //                         message:'Invalid Password'
    //                     })
    //                 }

    //             }else{
    //                 return res.status(400).json({message:'SomeThing went wrong !'})
    //             }
        
    //     })
    // } ,

    // signIn : (req, res) => {
    //     USER.findOne({ email: req.body.email }).exec(async (error, user) => {
    //       if (error) return res.status(400).json({ error });
    //       if (user) {
    //         const isPassword = await bcrypt.compare(req.body.password,user.password);
    //         if (isPassword ) {
    //           const token =  jwt.sign({_id:_id.user,image:image.user,fullName:fullName.user,email:email.user,phone:phone.user,specialité:specialité.user,description:description.user,role:role.user},'MEARNSECRET',{expiresIn:'1h'})
    //            res.status(200).json({
    //             token 
    //           });
    //         } else {
    //           return res.status(400).json({
    //             message: "Invalid password !",
    //           });
    //         }
    //       } else {
    //         return res.status(400).json({ message: "Something went wrong" });
    //       }  ,

    signIn : (req, res) => {
        USER.findOne({ email: req.body.email }).exec(async (error, user) => {
          if (error) return res.status(400).json({ error });
          if (user) {
           const isPass = bcrypt.compare( user.password , req.body.password )
            if (isPass) {
              const token =  jwt.sign({_id:user._id,image:user.image,fullName:user.fullName,email:user.email,phone:user.phone,specialité:user.specialité,description:user.description,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
               res.status(200).json({
                token 
              });
            } else {
              return res.status(400).json({
                message: "Invalid password !",
              });
            }
          } else {
            return res.status(400).json({ message: "Something went wrong" });
          }
        });
      },

    

        //   delete user
        //   deleteUser:async(req,res)=>{
        //     try{
        //       const user = await USER.findByIdAndDelete(req.params.id)
        //     res.json(user)
        //     } catch (error) {
        //       console.error(error.message);
        //       res.status(500).send("server error");
        //     }
        // },
        //         //update expert
        //         updateUser:async(req,res)=>{
        //             try {
        //               const user = await USER.findByIdAndUpdate(
        //                 req.params.id,
        //                 req.body,
        //                 { new: true }
        //               );
        //               res.json(user);
        //             } catch (error) {
        //               console.error(error.message);
        //             }
        //         }
    

}