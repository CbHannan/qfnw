const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');

const app = express(); 
app.listen(process.env.PORT || 5000);
var cors = require('cors');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('*', express.static(path.join(__dirname, 'dist')));
app.use(cors({
  origin: true,
  credentials: true
}));

