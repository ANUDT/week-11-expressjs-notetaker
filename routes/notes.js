const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  } = require('../helpers/fsUtils');

  notes.get('/', (req, res) => {
    const noteId =req.params.note_id;
    readFromFile('.db/db/.json')
    .then(data) => res.json(JSON.parse(data));
  });

  notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('.db/db/.json')
    .then((data) => JSON.parse(data))
    .then((json) => { 
      const result = json.filter((note) => note.tip_id === tipID);
      return result.lenght > 0
      ? res.json(result)
      :res.json ('no ID for note');
    res.json(JSON.parse(data));
  });