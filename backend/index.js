const express = require("express")
const mongoose = require('mongoose')
const cors = require ('cors')
const PersonasModel = require ('./models/personas')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/personas");

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

app.listen(3001, () => {
    console.log("servidor funcionando")
})
