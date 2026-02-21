const express =require('express');
const EnquiryRouter = require('./sendenquery');
const ApiRouter = express.Router();

ApiRouter.use('/v1',EnquiryRouter);
module.exports= ApiRouter;