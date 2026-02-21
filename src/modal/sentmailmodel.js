const mongoose = require('mongoose');

const  EnquerySchema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
      phonenumber: {
      type: String,
      match: [/^[6-9][0-9]{9}$/, "Please enter a valid 10-digit mobile number"]
    },
    message:{
        type:String
    }
});

const EnqueryModel = new mongoose.model("EnueryModel",EnquerySchema);
module.exports=EnqueryModel;