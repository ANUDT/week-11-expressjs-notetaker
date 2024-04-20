const express = require('express');
const path = require('path');
const app = express();
const html_routes = require('.routes/html-routes')
const api_routes = require('./routes/api-routes.js');
const { clog } = require( './middleware/clog.js');

const PORT = process.env.port || 3001;
const fs =require('fs');

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("./routes/diagnostics.json");
app.use(html_routes);
app.use(api_routes);

app.get('/', (req, res) =>
  res.sendFile('Navigate to/send or/routes'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/routes.html'))
);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});
