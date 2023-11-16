const BlogSchema = require('../models/blog.model');

// Creación de regiones.
const crearRegion = async (req, res) => {
    const {region, imgHeader, logo, name, texto, imgNews, titleNews, textNews} = req.body;

    if(!region || !imgHeader || !logo || !name || !texto || !imgNews || !titleNews || !textNews){
        return res.status(404).json({
            msg: "Todos los campos son requeridos",
            status: 404,
        });
    }

    try{

    await BlogSchema.create({
        region: region,
        imgHeader: imgHeader,
        logo: logo,
        name: name,
        texto: texto,
        imgNews: imgNews,
        titleNews: titleNews,
        textNews: textNews
    });

    res.status(201).json({
        msg: "Region creada correctamente",
        status: 201,
    });

} catch (error){
    console.log(error)
    res.status(500).json({
        msg: "Error al crear la region",
        status: 500,

    });
}

};

// Buscar regiones por nombre.

const getUserById = async (req, res) => {
    const {idblog} = req.params;

    if(!idblog){
        return res.status(404).json({
            msg: "Nombre de la region es requerido",
            status: 404,
        });
    }

    try{

    const nameRegion = await BlogSchema.findById(idblog);

    if(!nameRegion){
        return res.status(404).json({
            msg: "Region no encontrada",
            status: 404,
        });
    }

    res.status(200).json({
        msg: "Región encontrada exitosamente",
        data: {
            region: nameRegion.region,
            imgHeader: nameRegion.imgHeader,
            logo: nameRegion.logo,
            name: nameRegion.name,
            texto: nameRegion.texto,
            imgNews: nameRegion.imgNews,
            titleNews: nameRegion.titleNews,
            textNews: nameRegion.textNews
        },
        status: 200,
    });
} catch (error){
    console.log(error);
    res.status(500).json({
        msg:"Error al buscar la region",
        status: 500,
    });

}
}




module.exports = {
    crearRegion,
    getUserById,
}