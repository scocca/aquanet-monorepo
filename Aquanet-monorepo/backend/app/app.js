const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PersonasModel = require ('../models/personas')

const router = require('../routes/blog.routes');


const app = express();
app.use(cors());
app.use(express.json())

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use("/api/v1", router);
//app.use('*', (req, res)=> res.status(404).send("404- Ruta no encontrada"));

app.post ("/", (req,res) => {
    const {userName,password} = req.body
    PersonasModel.findOne({userName: userName})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Login correcto")
            }else{
                res.json("La contrasena es incorrecta")
            }
         }else{
                res.json("El usuario no existe")
         }
        })
    })

app.post('/registro',(req,res)=>{
    PersonasModel.create(req.body)
    .then(personas1 => res.json(personas1))
    .catch(err => res.json(err))
})

module.exports = app;