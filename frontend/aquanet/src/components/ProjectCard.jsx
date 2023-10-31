const ProjectCard=({url,title})=>{
    return(
        <div className="card-container">
            <img src={url} alt=''/>
            <h2 className="project-title">{title}</h2>
        </div>
    )
}

export {ProjectCard}