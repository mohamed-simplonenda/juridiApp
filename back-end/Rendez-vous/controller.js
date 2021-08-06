


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

    // add new rdv
    addRdv: async (req, res) => {
      const date = req.body.date
      const titre = req.body.titre
      const texte = req.body.texte
      const auteur= req.body.auteur

    
      try {
        rdv = new RDV({
          date,
          titre,
          texte,
          auteur
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