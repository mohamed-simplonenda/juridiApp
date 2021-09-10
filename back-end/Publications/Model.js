const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const publicationSchema=new Schema({
    image:{
        type:String,
        
    },
    date:{
        type:String,
        
    },
    titre:{
        type:String,
        
    },
    texte:{
        type:String,
        
    },
    auteur:{
        type:String,
        
    }
    ,
    imageExpert:{
        type:String,
        
    }
    ,
    description:{
        type:String,
        
    }
    
},
{ timestamps: true })

module.exports = publication = mongoose.model('publication', publicationSchema);