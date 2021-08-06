USERS =require('./Model')
module.exports={
    //get All Users
    getUsers:async(req,res)=>{
     
        try {
            const users = await USERS.find();
            res.json(users);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
  
    },

    // add new Users
    addUsers: async (req, res) => {
      const nom = req.body.nom
      const prenom = req.body.prenom
      const email = req.body.email
      const password = req.body.password
      const role = req.body.role

    
      try {
        users = new USERS({
          nom,
          prenom,
          email,
          password,
          role
        });
        await users.save();
        res.json(users);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
        },
    

      //update Users
      updateUsers:async(req,res)=>{
        try {
          const users = await USERS.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(users);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete Users
      deleteUsers:async(req,res)=>{
        try{
          const users = await USERS.findByIdAndDelete(req.params.id)
        res.json(users)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}