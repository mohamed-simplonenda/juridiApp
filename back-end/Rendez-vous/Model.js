const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const rdvSchema=new Schema({
 
    date:{
        type:String,
        required:true
    },
    titre:{
        type:String,
        required:true
    },
    texte:{
        type:String,
        required:true
    },
    auteur:{
        type:String,
        required:true
    }
})

module.exports = rdv = mongoose.model('rdv', rdvSchema);