require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PersonasModel = require ('../models/personas');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
require ('dotenv').config();
const router = require('../routes/blog.routes');
const { crearPerfilCompleto,getOngByName,getOngById,UpdateProfileById,getOngs  } = require('../controllers/profile.controller');


const app = express();
app.use(cors());
app.use(express.json())

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));





const verifyUser = (req,res,next) => {
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.json("El token no esta disponible")
    }else{
        jwt.verify(token, "jwt-clavesecreta",(err,decoded)=> {
            if(err) return res.json("El token es incorrecto")
            next();

        })
    }
}

app.get('/profile', verifyUser,(req,res) => {
    return res.json("Login correcto")
})

app.post ("/", (req,res) => {
    const {userName,password} = req.body;
    PersonasModel.findOne({userName: userName})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Login correcto")
            }else{
                res.json("La contrasena es incorrecta");
            }
         }else{
                res.json("El usuario no existe")
         }
        })
    });

app.post('/registro',(req,res)=>{
    PersonasModel.create(req.body)
    .then(personas1 => res.json(personas1))
    .catch(err => res.json(err))
})

module.exports = app;