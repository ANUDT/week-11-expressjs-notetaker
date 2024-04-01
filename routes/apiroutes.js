const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs =require ("fs");
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
apiRoutes.get('./routes/apiRoutes.js', async (req, res) => {
  const db
  
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
apiRoutes.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = apiRoutes;
