const router = require('express').Router();
const path = require('path');

router
const tipsRouter = require('./api-routes');
const feedbackRouter = require('./feedback.js');
const diagnosticsRouter = require('./diagnostics.json');



router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostic', diagnosticRouter);

module.exports = router;
