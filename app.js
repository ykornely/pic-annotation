require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

//middleware
// bodyparser is needed so we can pass json datas into this app
app.use(bodyParser.json());
// this node.js app and the client-side app will be running in two different port numbers, 
// so to communicate between them, we need to add the cors package
app.use(cors());

// start express server
// we pass the port number with process.env.PORT
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));