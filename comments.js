


// create web server 
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a response from comments.js');
});

// create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`This is a response from comments.js for id ${req.params.id}`);
});

// create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request to comments.js');
});

// create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send(`This is a PUT request to comments.js for id ${req.params.id}`);
});

// create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send(`This is a DELETE request to comments.js for id ${req.params.id}`);
});

// create a route for GET /comments/:id/replies/:replyId
app.get('/comments/:id/replies/:replyId', (req, res) => {
  res.send(`This is a response from comments.js for id ${req.params.id} and replyId ${req.params.replyId}`);
});

//