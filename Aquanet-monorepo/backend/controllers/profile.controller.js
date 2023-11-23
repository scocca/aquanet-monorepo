const Profile = require('../models/profiledata.model')


const crearPerfilCompleto = async (req,res)=>{

    const {profileName, profileDescription, profileMail, profilePhone, profileWeb, profileProyect1,
    profileProyect2, profileProyect3, profileBlog, profileBlogDescription}=req.body
        console.log('prueba1')

    if(!profileName||!profileDescription||!profileMail||!profilePhone||!profileWeb||!profileProyect1||
        !profileProyect2||!profileProyect3||!profileBlog||!profileBlogDescription){
            return res.status(400).json({
                msg:"Todos los campos son requeridos",
                status:400
            })
        }
    
        try{
            await Profile.create({
                profileName:profileName,
                profileDescription:profileDescription,
                profileMail:profileMail,
                profilePhone:profilePhone,
                profileWeb:profileWeb,
                profileProyect1:profileProyect1,
                profileProyect2:profileProyect2,
                profileProyect3:profileProyect3,
                profileBlog:profileBlog,
                profileBlogDescription:profileBlogDescription,
            })

            res.status(200).json({
                msg:"Perfil de ONG creado correctamente",
                status:200,
            })
        }catch (error){
            console.error(error);
            res.status(500).json({
                msg:"Error al crear el perfil",
                status:500
            });
        };
};

const getOngByName= async (req,res)=>{
    const {nameong}=req.params;
    
    if(!nameong){
        return res.status(400).json({
            msg:"nombre de ong requerido",
            status: 400
        });
    };

    try{
        const ong = await Profile.findOne({profileName:nameong});

        if(!ong){
            return res.status(404).json({
                msg:"Ong no encontrada",
                status:404
            });
        };

        res.status(200).json({
            msg:"ONG encontrada con exito",
            data:{
                id:ong._id,
                name: ong.profileName
            },
            status:200,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"Error al buscar en el servidor",
            status:500
        })
    }
}

const getOngById= async (req,res)=>{
    const {idong}=req.params;
    
    if(!idong){
        return res.status(400).json({
            msg:"ID de ONG requerido",
            status: 400
        });
    };

    if(idong.length !== 24){
        return res.status(400).json({
            msg:"Id de ONG no valido",
            status:404
        });
    };

    try{
        const ong = await Profile.findOne({_id:idong});

        if(!ong){
            return res.status(404).json({
                msg:"Ong no encontrada",
                status:404
            });
        };

        res.status(200).json({
            msg:"ONG encontrada con exito",
            data:{
                id:ong._id,
                name: ong.profileName
            },
            status:200,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"Error al buscar en el servidor",
            status:500
        })
    }
}

const UpdateProfileById = async (req,res)=>{
    const {idong} = req.params;
    const {profileName, profileDescription, profileMail, profilePhone, profileWeb, profileProyect1,
        profileProyect2, profileProyect3, profileBlog, profileBlogDescription}=req.body;
    
        if(!profileName||!profileDescription||!profileMail||!profilePhone||!profileWeb||!profileProyect1||
            !profileProyect2||!profileProyect3||!profileBlog||!profileBlogDescription){
                return res.status(400).json({
                    msg:"Todos los campos son requeridos",
                    status:400
                })
            }
         if(!idong){
            return res.status(400).json({
                    msg:"ID de ONG requerido",
                    status: 400
                });
            };
        
        if(idong.length !== 24){
                return res.status(400).json({
                    msg:"Id de ONG no valido",
                    status:404
                });
        };

        const ongChanges = {
            profileName:profileName,
            profileDescription:profileDescription,
            profileMail:profileMail,
            profilePhone:profilePhone,
            profileWeb:profileWeb,
            profileProyect1:profileProyect1,
            profileProyect2:profileProyect2,
            profileProyect3:profileProyect3,
            profileBlog:profileBlog,
            profileBlogDescription:profileBlogDescription,
        }

        await Profile.findByIdAndUpdate(idong, ongChanges)
        
        res.status(200).json({
            msg:"Perfil de ONG creado correctamente",
            status:200,
        })
};


const getOngs=async (req,res)=>{
    try{
        const profiles = await Profile.find();
        const ongData=profiles.map((profile)=>{
            return{
                idong:profile._id,
                ongName:profile.profileName
            };
        });

        res.status(200).json({
            msg:'ONGs encontradas',
            data:{
                ongs:ongData
            },
            status:200,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"Error al buscar en el servidor",
            status:500
        })
    }
}

module.exports ={ crearPerfilCompleto,
                    getOngByName,
                    getOngById,
                    UpdateProfileById,
                    getOngs }