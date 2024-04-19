const tips = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

tips.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

tips.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = tips;
