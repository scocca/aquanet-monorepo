import url from '../assets/Images/Ellipse 2358.png'

const ProjectCard=({title})=>{
    return(
        <div className="card-container">
            <img src={url} alt=''/>
            <h2 className="card-title">{title}</h2>
        </div>
    )
}

export {ProjectCard}