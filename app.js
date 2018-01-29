const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getBiggestPuddle } = require('./actions/logic')
// const routes = require('./routes/router');

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(routes);


app.get('/', (req,res,next) => {
  res.status(200);
})

app.post('/api', (req,res,next) => {
  let q = req.body;
  console.log(q);// 
  let z = getBiggestPuddle(q);
  res.header('Access-Control-Allow-Origin: *');
  res.status(201).send(z);
})



module.exports = app;