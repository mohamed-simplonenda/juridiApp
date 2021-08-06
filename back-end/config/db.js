const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://mohamed:simplonenda@cluster0.etfp2.mongodb.net/JuridiqueApp?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error connexion data_base')})

} 
module.exports = db_connection