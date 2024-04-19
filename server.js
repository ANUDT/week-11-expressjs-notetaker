const express = require('express');
const html_routes = require('.routes/html-routes')
const path =require('path');
const api_routes = require('./routes/api-routes.js');
const { clog } = require( './middleware/clog.js');

const PORT = process.env.port || 3001;
const fs =require('fs');

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("./routes/diagnostics.json");
app.use(html_routes);
app.use(api_routes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});
