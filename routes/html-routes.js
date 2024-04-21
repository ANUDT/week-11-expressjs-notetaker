const router = require('express').Router();
const path = require('path');
//* this are express modules to define the HTTP routes -method in app

//* set up of route in Node.js and express. below router modules has routes
router
const tipsRouter = require('./api-routes');
const feedbackRouter = require('./feedback.js');
const diagnosticsRouter = require('./diagnostics.json');


//* per router module there is a route defination for going throught tips, feedback and diagnostic
router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostic', diagnosticRouter);

module.exports = router;
