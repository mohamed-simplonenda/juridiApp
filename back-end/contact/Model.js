const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const contactSchema=new Schema({
    nom:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    message:{
        type:String,
        
    }
    
},
{ timestamps: true })

module.exports = contact = mongoose.model('contact', contactSchema);