const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/regionesblog");
        console.log("Base de datos conectada");

    } catch (error){
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
};

module.exports = {dbConnection};