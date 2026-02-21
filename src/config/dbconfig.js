const mongoose = require('mongoose');
const { Mongourl } = require('./envconfig');

const connectdb =async()=>{
    try{
     await mongoose.connect(Mongourl);
     console.log("database is connected successfully ....")
    }catch(error){
      console.log("error in connect to database due to "+error);
    }
}
module.exports=connectdb;