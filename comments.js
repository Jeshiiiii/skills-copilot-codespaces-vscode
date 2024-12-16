const express = require('express');
const router = express.Router();

// create a route for comments
router.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// create a route for comments/:id
router.get('/comments/:id', (req, res) => {
  res.send(`Get comment with ID: ${req.params.id}`);
});

// export the router
module.exports = router;

// create web server
const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});