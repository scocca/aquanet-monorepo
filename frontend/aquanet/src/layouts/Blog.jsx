import '../App.css'
import './Blog.css'
import React from 'react'
import { FrontPhoto } from '../components/front-photo'
import PhotoCord from '../assets/Images/foto_cordillera.png';
import { NavBar } from '../components/NavBar';
import PhotoLogo from '../components/PhotoLogo';
import ParagraphHeader from '../components/ParagraphHeader';
import Maps from '../components/Maps';

const Blog = () => {
  return (
    <>
    <main className="blog">
        <NavBar/>
        <section className="blog-header">
            <FrontPhoto photo={PhotoCord}/>
        <div className="user-blog-container">
            <PhotoLogo/>
            <ParagraphHeader/>
            <Maps/>
        </div>
        </section>
        <section className="blog-news-section">
            <div className="blog-container">

            </div>
        </section>
    </main>
    </>
  )
}

export default Blog
