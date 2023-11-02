// import React from "react"
import './Login.css'
import './Profile.css'
import cardData from '../assets/Json/cards.json'
import BlogData from '../assets/Json/blog.json'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/footer';
import { FrontPhoto } from "../components/front-photo";
import { RoundPhoto } from "../components/roundPhoto";
import { ProfileParagraph } from "../components/profileParagraph";
import { GetInTouch } from "../components/getInTouch";
import { ProjectTitle } from "../components/ProjectsTitle";
import { ProjectCard } from "../components/ProjectCard";
import { ConnectBtn } from "../components/ConnectBtn";
import { BlogTitle } from "../components/BlogTitle";
import { ResumePhoto } from "../components/ResumePhoto";
import { BlogParagraph } from "../components/BlogParagraph";
import PhotoCord from '../assets/Images/foto_cordillera.png';
import Portrait from '../assets/Images/image 30.png'
import mailIcon from '../assets/Icons/mail_FILL0_wght400_GRAD0_opsz24 1.png'
import telIcon from '../assets/Icons/call_FILL0_wght400_GRAD0_opsz24 1.png'
import webIcon from '../assets/Icons/public_FILL0_wght400_GRAD0_opsz24 1.svg'
import settingIcon from '../assets/Icons/settings_FILL0_wght400_GRAD0_opsz24 1.png'

import bigImage from '../assets/Images/Rectangle 14474.png'

const Profile =()=>{
    return (
        <>
            <NavBar/>
            <main className="Profile">
            <section className="header">
                <FrontPhoto photo={PhotoCord}/>
                <div className="profile-container-info">
                <RoundPhoto photo={Portrait}/>
                <ProfileParagraph userName={'Cooperativa agua portable cumpeo'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} settingIcon={settingIcon}/>
                <GetInTouch mail={'asdasd@asdas.com'} telephone={'+1212121212'} web={'coopcump.com'} mailIcon={mailIcon} telIcon={telIcon} webIcon={webIcon}/>
                </div>
            </section>
            <section className="cards-info">
                <ProjectTitle/>
                <div className="cards-container">
                {cardData.map((card)=>(
                <ProjectCard key='' title={card.title} img={card.img}/>))}
                </div>
                <ConnectBtn/>
            </section>
            <section className="blog">
                <BlogTitle/>
                <div className="blog-container">
                {BlogData.map((blog)=>(   
                    <ResumePhoto key='' url={bigImage}/>
                    ))}
                {BlogData.map((blog)=>(   
                    <BlogParagraph key='' subtitle={blog.title} paragraph={blog.paragraph}/>
                    ))}
                </div>
            </section>
            </main>
            <Footer/>
        </>
    )
}

export {Profile}