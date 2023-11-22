const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PersonasModel = require ('../models/personas')
const router = require('../routes/blog.routes');
const { crearPerfilCompleto,
    getOngByName,
    getOngById,
    UpdateProfileById,
    getOngs  } = require('../controllers/profile.comtroller');


const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1", router);
app.use('*', (req, res)=> res.status(404).send("404- Ruta no encontrada"));

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


//endpoint para crear un perfil completo
//app.post('/api/v1/createprofile', crearPerfilCompleto);

app.post('/create-profile', crearPerfilCompleto)

//endpoint para buscar una ONG por Nombre
app.get('/ong-by-name/:nameong', getOngByName);

//endpoint para buscar una ONG por ID
app.get('/ong-by-id/:id', getOngById);

//endpoint para buscar todas las ongs y sus id
app.get('/all-ong', getOngs)

//endpoint para modificar el perfil por ID
app.put('/update-by-id/:id', UpdateProfileById)

module.exports = app;