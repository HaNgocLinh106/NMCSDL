const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var BacSiController = require('./controllers/BacSiController.js');
var employeeController = require('./controllers/employeeController.js');
var lichKhamController = require('./controllers/lichKhamController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/BacSis', BacSiController);
app.use('/dsLichKham', lichKhamController);
app.use('/employees', employeeController);