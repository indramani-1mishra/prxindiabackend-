require('dotenv').config();

const Port =process.env.PORT||3000;
const Mongourl = process.env.Mongourl;
const USERGMAIL =process.env.USERGMAIL;
const USERAPPPASS= process.env.USERAPPPASS;

module.exports={
    Port,
    Mongourl,
    USERGMAIL,
    USERAPPPASS
}