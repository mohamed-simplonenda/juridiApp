const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const expertSchema = new Schema({
     fullName:{
    type:String,
       required:true,
       trim:true,
       min:3,
       max:20 ,
       index:true,
       lowercase:true
    },
    image:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
    },
    specialité:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20 
    },
    email:{
         type:String, unique:true,
         trim:true,
         lowercase:true
        
    },
    
    password:{
        type:String,
        trim:true,
        min:6,
        max:20 
    },
    status:{
        type:String,
        enum:['validée','en attente'],
        default: 'en attente' 
    },
    role:{
        type:String,
        default: 'expert'
    }
},{timestamps:true})

  
 
module.exports = mongoose.model('expert',expertSchema)