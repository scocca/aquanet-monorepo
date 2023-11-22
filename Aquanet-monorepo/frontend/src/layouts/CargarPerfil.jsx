
import './CargarPerfil.css'

const CargarPerfil =()=>{
    return (
        <>
            <div className="load-profile">
            <section className="load-profile-section">
                <div className='profile-data'>
                    <p className='load-profile-p'>Ingresa tu nombre</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-name' required minLength='4' maxLength='24' placeholder='Nombre'></input>
                    <p className='load-profile-p'>Ingresa una breve descripcion</p>
                    <textarea className='load-profile-inputs' id='load-profile-description' name='description-body' cols='50'>Escribe tu descripcion  aqui</textarea>
                    <p className='load-profile-p'>Ingresa un correo</p>
                    <input type='mail' className='load-profile-inputs'  id='load-profile-mail' required minLength='4' maxLength='36' placeholder='Correo'></input>
                    <p className='load-profile-p'>Ingresa un telefono de contacto</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-phone' required minLength='11' maxLength='11' placeholder='Numero de telefono'></input>
                    <p className='load-profile-p'>Ingresa una direccion web</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-web' required minLength='4' maxLength='24' placeholder='direccion web'></input>
                    <p className='load-profile-p'>ingresa tres proyectos</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect1' required minLength='4' maxLength='24' placeholder='nombra un proyecto'></input>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect2' required minLength='4' maxLength='24' placeholder='nombra un proyecto'></input>
                    <input type='text' className='load-profile-inputs'  id='load-profile-proyect3' required minLength='4' maxLength='24' placeholder='nombra un proyecto'></input>
                    <p className='load-profile-p'>Ingresa un titulo para tu blog</p>
                    <input type='text' className='load-profile-inputs'  id='load-profile-blogt' required minLength='4' maxLength='24' placeholder='un titulo para tu blog'></input>
                    <p className='load-profile-p'>Escribe aqui tu blog</p>
                    <textarea className='load-profile-inputs' id='load-profile-blogb' name='blog-body' cols='50'>Escribe tu blog aqui</textarea>
                </div>
            </section>
            <div className='loader-right-container'>
            <div className='load-profile-photos'>
                <div className='photo-loader-div'>
                    <p className='load-profile-p'>Carga tu foto de portada</p>
                    <input className='profile-photo-loader' type='file' name='profile-photo-load'></input>
                    <p className='load-profile-p'>Carga tu foto de perfil</p>
                    <input className='profile-photo-loader' type='file' name='profile-portrait-load'></input>
                    <p className='load-profile-p'>Carga tu foto de proyectos</p>
                    <input className='profile-photo-loader' type='file' name='profile-proyect1-load'></input>
                    <input className='profile-photo-loader' type='file' name='profile-proyect2-load'></input>
                    <input className='profile-photo-loader' type='file' name='profile-proyect3-load'></input>
                    <p className='load-profile-p'>Carga la foto para tu blog</p>
                    <input className='profile-photo-loader' type='file' name='profile-blog-load'></input>
                </div>
            </div>
           
            <div className='load-profile-btncontainer'>
                <button id='load-profile-button'>Cargar</button>
            </div>
            </div>
            </div>
            
        </>
    )
}

export {CargarPerfil}