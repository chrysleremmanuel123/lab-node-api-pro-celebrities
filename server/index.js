const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var celeb = require('../controller/userController')

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));


app.listen(3000, () => console.log('Server started at port 3000'));
app.use('/celebrities', celeb)