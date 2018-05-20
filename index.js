const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');

const app = express();
const server = http.Server(app);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
