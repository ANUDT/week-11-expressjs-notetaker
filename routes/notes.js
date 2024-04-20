const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  } = require('../helpers/fsUtils');

  notes.get('/', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('.db/db/.json')
    .then((data) => res.json(JSON.parse(data))
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
  })

  notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('.db/db/.json')
    .then((data) => JSON.parse(data))
    .then ((json) => {
     
      const result =json.filter(note.id !== noteId);

      writeToFile('.db/db/.json',result);
      res.json('Item${noteId} removed');
    });
  });

  notes.post('/', (req, res) => {
    console.log(req.body);

    const{ title,text} = req.body;

    if (req.body) {
      const newNote ={
        title,
        text,
        id: uuidv4(),
      };

      readAndAppend(newNote,'./db/db.json');
      res.json('Added note succesfully');
    } else {
      res.error('Adding note unsuccesfull');


    }