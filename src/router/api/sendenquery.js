const express = require('express');
const { Sendenquery } = require('../../controller/Sendquery.js');

const EnquiryRouter = express.Router();

EnquiryRouter.post('/sendnquery',Sendenquery);
module.exports=EnquiryRouter;