const express = require('express');

const app = express();

const routes = require('./routes/url_pair');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get('/', (req, res) => {
  return res.send('URL Shortener API is live!');
});

app.use('/api', routes);

module.exports = app;
