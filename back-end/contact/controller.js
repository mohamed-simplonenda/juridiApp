


CONTACT=require('./Model')
module.exports={
    //get All contact
    getContact:async(req,res)=>{
      try {
        const contact = await CONTACT.find();
        res.json(contact);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    },


    // add new contact
    addContact: async (req, res) => {
      const nom = req.body.nom
      const email = req.body.email
      const message = req.body.message
   

    
      try {
        contact = new CONTACT({
          nom,
          email,
          message
        });
        await contact.save();
        res.json(contact);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }        },
    

      //update contact
      updateContact:async(req,res)=>{
        try {
          const contact = await CONTACT.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(contact);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete contact
      deleteContact:async(req,res)=>{
        try{
          const contact = await CONTACT.findByIdAndDelete(req.params.id)
        res.json(contact)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}