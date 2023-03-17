const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser  =require('body-parser');

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send("hello world");
// });
// app.get('/todos', (req, res) =>{
//     res.send("Todos")
// })
const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'})
connectDB();
//routes
app.use('/', require('./routes/todo'));

app.listen(3000);