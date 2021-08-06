const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const rdvSchema=new Schema({
 
    date:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports = rdv = mongoose.model('rdv', rdvSchema);