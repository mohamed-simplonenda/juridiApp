const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const rdvSchema=new Schema({
 
    date:{
        type:Date,
        required:true
    },
    heure:{
        type:String,
        required:true
    },
    idExpert:{
        type:String,
        
    },
    NomExpert:{
        type:String,
        
    },
    idUser:{
        type:String,
        
    },
    NomUser:{
        type:String,
        
    },
    status:{
        type:String,
        enum:['validée','en attente'],
        default: 'en attente' 
    },
})

module.exports = rdv = mongoose.model('rdv', rdvSchema);