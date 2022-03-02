require('dotenv').config();

const http = require('http');
const mongoose = require('mongoose');
const app = require('./src/app');

const server = http.createServer(app);

const PORT = process.env.SERVER_PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

server.listen(PORT, function () {
  console.log('Server has started on port ' + PORT);

  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error(error));
});
