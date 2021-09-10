const mongoose = require('mongoose')
const Schema = mongoose.Schema
 const userSchema = new Schema({
    image:{
        type:String
       
 
        },
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
    specialité:{
        type:String,
        required:function(){
            return this.role === "expert";
        }
    },
    description:{
        type:String,
        required:function(){
            return this.role === "expert";
        }
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
        default: 'en attente' ,
        required:function(){
            return this.role === "expert";
        }
    },
    role:{
        type:String,
        enum:['user','admin','expert'],
        default: 'user',
        required:true
    }
},{timestamps:true})

  
 
module.exports = mongoose.model('users',userSchema)