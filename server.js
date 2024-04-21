const express = require("express");
const path = require("path");
const api_routes = require("./routes/index.js");
//*required express modules 

const app = express();
//*starts the Express app 

const PORT = process.env.port || 3001;
//* set up of port number in express 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
//* handle parsing of JSON and URL-encoded and serving static files from a specified directory. 

app.use("/api", api_routes);
//*handling routes for api

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

//* the lines above usinf HTTP method to get HTML