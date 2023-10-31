import React from "react"
import './App.css'
import './Profile.css'
import cardData from './cards.json'
import BlogData from './blog.json'
import { NavBar } from './components/NavBar.js'
import { Footer } from './components/footer';
import { FrontPhoto } from "./components/front-photo";
import { RoundPhoto } from "./components/roundPhoto";
import { ProfileParagraph } from "./components/profileParagraph";
import { GetInTouch } from "./components/getInTouch";
import { ProjectTitle } from "./components/ProjectsTitle";
import { ProjectCard } from "./components/ProjectCard";
import { ConnectBtn } from "./components/ConnectBtn";
import { BlogTitle } from "./components/BlogTitle";
import { ResumePhoto } from "./components/ResumePhoto";
import { BlogParagraph } from "./components/BlogParagraph";
import PhotoCord from './assets/profile/foto_cordillera.png';
import Portrait from './assets/profile/image 30.png'

const Profile =()=>{
    return (
        <>
            <NavBar/>
            <main className="Profile">
            <section className="header">
                <FrontPhoto photo={PhotoCord}/>
                <div className="profile-container-info">
                <RoundPhoto photo={Portrait}/>
                <ProfileParagraph userName={'Cooperativa agua portable cumpeo'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                <GetInTouch/>
                </div>
            </section>
            <section className="cards-info">
                <ProjectTitle/>
                <div className="cards-container">
                {cardData.map((card)=>(
                <ProjectCard title={card.title} img={card.img}/>))}
                </div>
                <ConnectBtn/>
            </section>
            <section className="Blog">
                <BlogTitle/>
                <div className="blog-container">
                {BlogData.map((blog)=>(   
                    <ResumePhoto url={blog.img}/>
                    ))}
                {BlogData.map((blog)=>(   
                    <BlogParagraph title={blog.title} paragraph={blog.paragraph}/>
                    ))}
                </div>
            </section>
            </main>
            <Footer/>
        </>
    )
}

export {Profile}