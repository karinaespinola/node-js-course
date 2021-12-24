const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// Built-in middleware to handle urlencoded

// Express allows us to include regular expression in the route
// In this case the route could be just a slash or include index.html
// also .html is optional as well
app.get('^/$|index(.html)?', (req, res) => {
  // res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html'); // 302 by default
});

const one = (req, res, next) => {
  console.log('One');
  next();
}

const two = (req, res, next) => {
  console.log('Two');
  next();
}

const three = (req, res) => {
  console.log('Three');
  res.send("Finished!");
}

app.get('/chained(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));