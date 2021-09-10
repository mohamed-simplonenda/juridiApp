
const dotenv = require('dotenv')
dotenv.config()
const PORT=process.env.PORT



const express=require('express')
const app = express()
const db = require('./config/db')
db();
const cors =require('cors')
app.use(cors())
const body = require('body-parser')
app.use(express.json())


const publication = require('./Publications/route')
const rdv = require('./Rendez-vous/route')
const contact = require('./contact/route')


app.use('/app/publication',publication)
app.use('/app/rendez-vous',rdv)
app.use('/app/contact',contact)


// run user
const user = require('./auth/user/userRoute');
app.use("/app/user", user);







// run admin
const admin = require('./auth/admin/adminRoute');
app.use("/app/admin", admin);

// run expert
const expert = require('./auth/expert/expertRoute');
app.use("/app/expert", expert);

//  Config server
app.listen(PORT,(err)=>{
    if(err){
        console.log('server is not running')
    }
    else {
        console.log(`server is running on port ${PORT}` )
    }
})