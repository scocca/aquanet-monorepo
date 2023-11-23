require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PersonasModel = require ('../models/personas')
const router = require('../routes/blog.routes');
const { crearPerfilCompleto,getOngByName,getOngById,UpdateProfileById,getOngs  } = require('../controllers/profile.controller');


const app = express();
app.use(cors());

const { storage } = require('../services/storage');
const multer = require('multer');
const upload = multer({ storage });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.post ("/", (req,res) => {
    const {userName,password} = req.body;
    PersonasModel.findOne({userName: userName})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Login correcto");
            }else{
                res.json("La contrasena es incorrecta");
            }
         }else{
                res.json("El usuario no existe");
         }
        })
    });

app.post('/registro',(req,res)=>{
    PersonasModel.create(req.body)
    .then(personas1 => res.json(personas1))
    .catch(err => res.json(err));
});


//endpoint para buscar una ONG por ID
app.get('/api/v1/ong-by-id/:idong', getOngById);

//endpoint para buscar una ONG por Nombre
app.get('/api/v1/ong-by-name/:nameong', getOngByName);

//endpoint para crear un perfil completo
app.post("/api/v1/create-profile", crearPerfilCompleto)

//endpoint para buscar todas las ongs y sus id
app.get('/api/v1/all-ong', getOngs)

//endpoint para modificar el perfil por ID
app.put('/update-by-id/:id', UpdateProfileById)

app.post('/upload-profile-photo', upload.single('profile-photo-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file;
    console.log(image);
    res.send(image);
});

app.post('/upload-portrait-photo', upload.single('profile-portrait-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file
    console.log(image.path)
    res.send(image.path);
});

app.post('/upload-proyect1-photo', upload.single('profile-proyect1-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file
    console.log(image.path)
    res.send(image.path);
});

app.post('/upload-proyect2-photo', upload.single('profile-proyect2-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file
    console.log(image.path)
    res.send(image.path);
});

app.post('/upload-proyect3-photo', upload.single('profile-proyect3-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file
    console.log(image.path)
    res.send('done');
});

app.post('/upload-blog-photo', upload.single('profile-blog-load'), async(req, res) => {
    console.log(req.file);
    const image = req.file
    console.log(image.path)
    res.send(image.path);
});



app.use("/api/v1", router);
app.use('*', (req, res)=> res.status(404).send("404- Ruta no encontrada"));
module.exports = app;