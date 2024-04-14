const express = require('express');
const path =require('path');
const { clog } = require( './middleware/clog.js');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;
const fs =require('fs');

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("./routes/diagnostics.json");
app.use("./routes/htmlroutes");
app.use("./routes/index.html");

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);