const express = require('express');
const app = express();
const PORT = 1337;
const implementation = require('./app')

const morgan = require('morgan');
app.use(morgan('dev'));
app.all( '.*', (res,req,next) => {
  
}, next())
app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`) );