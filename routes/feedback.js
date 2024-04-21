const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
//* this are the Express functions and modules that will be used

//* this code is used for apis to retrieve from server via http method
fb.get('/', (req, res) =>
  readFromFile('./db/feedback.json')
  .then((data) => 
  res.json(JSON.parse(data)))
);

//* here the code creates a request with feedback with JSON, error message will appear is this unsuccesful
fb.post('/', (req, res) => {

  const { email, feedbackType, feedback } = req.body;

  if (email && feedbackType && feedback) {
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuidv4(),
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error feedback');
  }
});

module.exports = fb;
