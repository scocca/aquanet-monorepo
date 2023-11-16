const express = require('express');
const morgan = require('morgan');
const routerBlog = require('../routes/blog.routes');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", routerBlog);
app.use('*', (req, res)=> res.status(404).send("404- Ruta no encontrada"));

module.exports = app;