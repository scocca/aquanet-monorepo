import './Blog.css'
import { FrontPhoto } from '../components/front-photo'
import PhotoCord from '../assets/Images/foto_cordillera.png';
import { NavBar } from '../components/NavBar';
import { PhotoLogo } from '../components/PhotoLogo';
import { ParagraphHeader } from '../components/ParagraphHeader';
import { Maps } from '../components/Maps';
import { PhotoBlog } from '../components/PhotoBlog';
import { NewsInfo } from '../components/NewsInfo';
import { LinksTitle } from '../components/LinksTitle';
import { LinksBox } from '../components/LinksBox';
import { Footer } from '../components/footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get ('http://localhost:3132/profile')
        .then(result=> {console.log(result)
            if(result.data !== "Login correcto"){
                navigate('/')
            }
       })
       .catch(err=> console.log('err'))
    },[])
    const [valorRegion,setvalorRegion] = useState("");
    const [data,setData] = useState({});

    const handleRegion = (e) => {
    e.preventDefault();
    
    setvalorRegion(e.target.value);
    console.log(e.target.value);
    
  }

  useEffect(() =>{
    const url = "http://localhost:3132/api/v1/Blog/Araucania";
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> {setData(data.data); console.log(data)})
    .catch((error)=> console.log(error));
  }, [])

  useEffect(()=>{
    const url = `http://localhost:3132/api/v1/Blog/${valorRegion}`;
    console.log(url);
    
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> {setData(data.data); console.log(data)})
    .catch((error)=> console.log(error));


    
  },[valorRegion])


    

  return (
    <>
    <main className="blog-inf">
        <NavBar/>
        <section className="blog-header">
            <FrontPhoto photo={PhotoCord}/>
        <div className="user-blog-container">
        <PhotoLogo/>

        
            
            
            
            <ParagraphHeader
            name={data.name}
            texto={data.texto}
            />

          <form className='formBlog'>
              <label for="opcionesRegiones" className='titleformBlog'></label>
              <select className='opcionesRegiones' name="regiones" onChange={handleRegion}>
                <option className='opcionesBlog' value="Araucania">Araucania</option>
                <option className='opcionesBlog' value="Coquimbo">Coquimbo</option>
                <option className='opcionesBlog' value="Valparaiso">Valparaíso</option>
                <option className='opcionesBlog' value="Arica">Arica</option>
                <option className='opcionesBlog' value="Tarapaca">Tarapaca</option>
                <option className='opcionesBlog' value="Antofagasta">Antofagasta</option>
              </select>
            </form>
          
            <Maps/>
        </div>
        </section>
        <section className="blog-news-section">
            <div className="blog-container">
                <PhotoBlog/>
                <NewsInfo
                titleNews={data.titleNews}
                textNews={data.textNews}
                />
            </div>
        </section>

        <section className="links-container">
        <LinksTitle/>
        
            <div className="links">
                <LinksBox/>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Blog