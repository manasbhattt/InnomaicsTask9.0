const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser  =require('body-parser');

app.use(bodyParser.json());

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'})
connectDB();
//routes
app.use('/', require('./routes/todo'));

app.listen(3000);
