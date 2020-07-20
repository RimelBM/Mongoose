const mongoose = require('mongoose');


// normalement ->  MONGODB_UI = process.env.MONGODB_UI  , 

MONGODB_UI = 'mongodb+srv://rimel:rimelBM@cluster0-svva1.mongodb.net/first?retryWrites=true&w=majority';




const connectDB = ()=>{  
        mongoose.connect(MONGODB_UI ||'mongodb://localhost/server',{
        useNewUrlParser:true,
        useUnifiedTopology:true
       }     
  ).then(()=>{console.log('conected ')})
  .catch(()=>console.log('not connected'))
      }
  module.exports = connectDB;

