const router = require('express').Router();
const { v4: uuidva } = require('uuid');

rouet
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route

module.exports = router;
