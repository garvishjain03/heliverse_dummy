const express = require('express');
const app = express();
const user = require('./routes/user');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./db/conn');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(user);

app.listen(process.env.PORT,()=>{
    console.log(`server is started at ${process.env.PORT}`);
})

module.exports = app;

