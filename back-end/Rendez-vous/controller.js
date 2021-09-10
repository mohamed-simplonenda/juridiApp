


RDV=require('./Model')
module.exports={
    //get All rdv
    getRdv:async(req,res)=>{
      try {
        const rdv = await RDV.find();
        res.json(rdv);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    },


        //get one rdv
        getRdvById:async(req,res)=>{
          try {
            const rdv = await RDV.findById(req.params.id);
            res.json(rdv);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
        },


    // add new rdv
    addRdv: async (req, res) => {
      const date = req.body.date
      const heure = req.body.heure
      const idExpert = req.body.idExpert 
      const NomExpert = req.body.NomExpert 
      const idUser = req.body.idUser 
      const NomUser = req.body.NomUser
      const status = req.body.status 
      

    
      try {
        rdv = new RDV({
          date,
          heure,
          idExpert,
          NomExpert,
          idUser,
          NomUser,
          status
        });
        await rdv.save();
        res.json(rdv);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }        },
    

      //update rdv
      updateRdv:async(req,res)=>{
        try {
          const rdv = await RDV.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(rdv);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete rdv
      deleteRdv:async(req,res)=>{
        try{
          const rdv = await RDV.findByIdAndDelete(req.params.id)
        res.json(rdv)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}