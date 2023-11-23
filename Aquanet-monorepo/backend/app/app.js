const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PersonasModel = require ('../models/personas');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
require ('dotenv').config();

const router = require('../routes/blog.routes');


const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET","POST"],
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use("/api/v1", router);
//app.use('*', (req, res)=> res.status(404).send("404- Ruta no encontrada"));


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
    const {userName,password} = req.body
    PersonasModel.findOne({userName: userName})
    .then(user => {
        if (user) {
            if(user.password === password) {
                const token = jwt.sign({userName: user.userName}, "jwt-clavesecreta", {expiresIn:"1h"})
                res.cookie('token' , token);
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

/*app.post ('/auth' , (req,res)=> {
    const {userName,password} = req.body
    const user = PersonasModel.findOne({userName: userName})

    const accessToken = generateAccessToken(user);
    res.header('authorization',accessToken).json({
        message: 'Usuario autenticado',
        token : token
    })
});
 
function generateAccessToken(user){
    return jwt.sign(user,process.env.SECRET, {expiresIn: '1h'})
}
*/


module.exports = app;