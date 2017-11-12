const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const path = require('path');

const publicPath = path.join(__dirname,'../public');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//
// app.get('/index.html', (req, res) => {
//   res.sendFile(publicPath + '/index.html');
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
