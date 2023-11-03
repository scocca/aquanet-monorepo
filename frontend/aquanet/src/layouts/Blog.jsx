import '../App.css'
import './Blog.css'
import React from 'react'
import { FrontPhoto } from '../components/front-photo'
import PhotoCord from '../assets/Images/foto_cordillera.png';
import { NavBar } from '../components/NavBar';
import PhotoLogo from '../components/PhotoLogo';
import ParagraphHeader from '../components/ParagraphHeader';
import Maps from '../components/Maps';
import PhotoBlog from '../components/PhotoBlog';
import NewsInfo from '../components/NewsInfo';
import LinksTitle from '../components/LinksTitle';
import LinksBox from '../components/LinksBox';
import { Footer } from '../components/footer';

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
                <PhotoBlog/>
                <NewsInfo/>
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
