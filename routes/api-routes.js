const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const api_routes = require('./html-routes');
const { title } = require('process');
//*above will import the modules for system

//*below code is for handling HTTP methodes get, post,push delete in api routes
router.get('/api/routes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  res.json(dbJson);
});

router.delete('/api/notes:id', (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const dbJson = JSON.parse(data);
  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
  res.json("Note has been removed");
});
//* this confirms that deletion was completed

console.log(req.body);

module.exports = router;
