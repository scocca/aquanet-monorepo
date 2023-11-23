require('dotenv').config()
const app = require('./app/app');
const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')

const { dbConnection } = require('./database/connection');
const port = process.env.PORT || 2727;

//const app = express()
app.use(express.json())
app.use(cors())


//mongoose.connect("mongodb://127.0.0.1:27017/personas");


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});


app.listen(port, () => {
    console.log(`Server conectado y corriendo ${port}`)
})
dbConnection();