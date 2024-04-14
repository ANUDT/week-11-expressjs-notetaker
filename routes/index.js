const router = require('express').Router();
const { v4: uuidva } = require('uuid');

rouet
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticsRouter =require('./diagnostics');



router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);


module.exports = router;
