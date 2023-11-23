
import './CargarPerfil.css'
import { useState } from "react"
import axios from 'axios'


const CargarPerfil =()=>{
    const [profileName, setProfileName]=useState()
    const [profileDescription, setProfileDescription]=useState()
    const [profileMail,setProfileMail]=useState()
    const [profilePhone, setProfilePhone]=useState()
    const [profileWeb,setProfileWeb]=useState()
    const [profileProyect1,setProfileproyect1]=useState()
    const [profileProyect2,setProfileproyect2]=useState()
    const [profileProyect3,setProfileproyect3]=useState()
    const [profileBlog,setProfileBlog]=useState()
    const [profileBlogDescription, setProfileBlogDescription]=useState()
    const [profilePhoto, setProfilePhoto] = useState();
    const [portraitPhoto, setPortraitPhoto] = useState();
    const [proyect1Photo, setProyect1Photo] = useState();
    const [proyect2Photo, setProyect2Photo] = useState();
    const [proyect3Photo, setProyect3Photo] = useState();
    const [blogPhoto, setBlogPhoto] = useState();


    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:2727/api/v1/create-profile',{profileName,
        profileDescription,profileMail,profilePhone, profileWeb, profileProyect1,
        profileProyect2,profileProyect3,profileBlog,profileBlogDescription})
        .then(result=>{alert(result)})
        .catch(err=>alert(err));
        // axios.post('http://localhost:2727/upload-profile-photo',{profilePhoto})
        // .then(result=>{console.log(result)})
        // .catch(err=>console.log(err))

    }

    return (
        <>
            <div className="load-profile-container">
                <form onSubmit={handleSubmit} id='form-loader-cont'>
            <section className="load-profile-section">
                <div className='profile-data'>
                    <p className='load-profile-p'>Ingresa tu nombre</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-name' required minLength='4' maxLength='24' placeholder='Nombre' onChange={(e) => setProfileName(e.target.value)}></input>
                    <p className='load-profile-p'>Ingresa una breve descripcion</p>
                    <textarea className='load-profile-inputs' id='load-profile-description' name='description-body' cols='50' onChange={(e) => setProfileDescription(e.target.value)}>Escribe tu descripcion  aqui</textarea>
                    <p className='load-profile-p'>Ingresa un correo</p>
                    <input type='mail' className='load-profile-inputs'  id='load-profile-mail' required minLength='4' maxLength='36' placeholder='Correo' onChange={(e) => setProfileMail(e.target.value)}></input>
                    <p className='load-profile-p'>Ingresa un telefono de contacto</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-phone' required minLength='11' maxLength='11' placeholder='Numero de telefono' onChange={(e) => setProfilePhone(e.target.value)}></input>
                    <p className='load-profile-p'>Ingresa una direccion web</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-web' required minLength='4' maxLength='24' placeholder='direccion web'onChange={(e) => setProfileWeb(e.target.value)}></input>
                    <p className='load-profile-p'>ingresa tres proyectos</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect1' required minLength='4' maxLength='24' placeholder='nombra un proyecto' onChange={(e) => setProfileproyect1(e.target.value)}></input>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect2' required minLength='4' maxLength='24' placeholder='nombra un proyecto' onChange={(e) => setProfileproyect2(e.target.value)}></input>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect3' required minLength='4' maxLength='24' placeholder='nombra un proyecto'onChange={(e) => setProfileproyect3(e.target.value)}></input>
                    <p className='load-profile-p'>Ingresa un titulo para tu blog</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-blogt' required minLength='4' maxLength='24' placeholder='un titulo para tu blog' onChange={(e) => setProfileBlog(e.target.value)}></input>
                    <p className='load-profile-p'>Escribe aqui tu blog</p>
                    <textarea className='load-profile-inputs' id='load-profile-blogb' name='blog-body' cols='50' onChange={(e) => setProfileBlogDescription(e.target.value)}>Escribe tu blog aqui</textarea>
                </div>
            </section>
            <div className='loader-right-container'>
            <div className='load-profile-photos'>
                <div className='photo-loader-div'>
                    <p className='load-profile-p'>Carga tu foto de portada</p>
                    <input className='profile-photo-loader' type='file' name='profile-photo-load' onChange={(e)=>setProfilePhoto(e.target.files[0])}></input>
                    <p className='load-profile-p'>Carga tu foto de perfil</p>
                    <input className='profile-photo-loader' type='file' name='profile-portrait-load' ></input>
                    <p className='load-profile-p'>Carga tus fotos de proyectos</p>
                    <input className='profile-photo-loader' type='file' name='profile-proyect1-load' ></input>
                    <input className='profile-photo-loader' type='file' name='profile-proyect2-load' ></input>
                    <input className='profile-photo-loader' type='file' name='profile-proyect3-load' ></input>
                    <p className='load-profile-p'>Carga la foto para tu blog</p>
                    <input className='profile-photo-loader' type='file' name='profile-blog-load' ></input>
                </div>
            </div>
           
            <div className='load-profile-btncontainer'>
                <button id='load-profile-button' type='submit'>Cargar</button>
            </div>
            </div>
            </form>
            </div>
            
        </>
    )
}

export {CargarPerfil}