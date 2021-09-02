const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const userSchema = new Schema({
     fullName:{
    type:String,
       required:true,
       trim:true,
       min:3,
       max:20 ,
       index:true,
       lowercase:true
    },
    phone:{
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
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }
},{timestamps:true})

  
 
module.exports = mongoose.model('users',userSchema)