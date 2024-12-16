// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Import comment.js
const comment = require('./comment');

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the comments
app.post('/comments', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  res.send(comment.createComment(name, comment));
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});