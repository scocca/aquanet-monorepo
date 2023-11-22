const app = require('./app/app');
const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')

const { dbConnection } = require('./database/connection');
const port = process.env.PORT || 3132;

//const app = express()
app.use(express.json())
app.use(cors())
dbConnection();

//mongoose.connect("mongodb://127.0.0.1:27017/personas");



app.listen(port, () => {
    console.log(`Server conectado y corriendo ${port}`)
})
