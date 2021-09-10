


PUBLICATION=require('./Model')
module.exports={
    //get All publication
    getPublication:async(req,res)=>{
      try {
        const publication = await PUBLICATION.find();
        res.json(publication);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    },
        //get one publication
        getPublicationById:async(req,res)=>{
          try {
            const publication = await PUBLICATION.findById(req.params.id);
            res.json(publication);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("server error");
          }
        },

    // add new publication
    addPublication: async (req, res) => {
      const image = req.body.image
      const date = req.body.date
      const titre = req.body.titre
      const texte = req.body.texte
      const auteur= req.body.auteur
      const imageExpert= req.body.imageExpert
      const description= req.body.description

    
      try {
        publication = new PUBLICATION({
          image,
          date,
          titre,
          texte,
          auteur,
          imageExpert,
          description
        });
        await publication.save();
        res.json(publication);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }        },
    

      //update publication
      updatePublication:async(req,res)=>{
        try {
          const publication = await PUBLICATION.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(publication);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete publication
      deletePublication:async(req,res)=>{
        try{
          const publication = await PUBLICATION.findByIdAndDelete(req.params.id)
        res.json(publication)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}