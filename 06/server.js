const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// Express allows us to include regular expression in the route
// In this case the route could be just a slash or include index.html
// also .html is optional as well
app.get('^/$|index(.html)?', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));