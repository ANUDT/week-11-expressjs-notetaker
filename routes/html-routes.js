const router = require('express').Router();
const path =require('path');

router
const tipsRouter = require('./api-routes');
const feedbackRouter = require('./feedback');
const diagnosticsRouter =require('./diagnostics');



router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);


module.exports = router;
