const Collaborators = ({generation, femplea, bchile, bhp}) =>{
    return(
        <div className="end-container">
        <h3 className="collaborators-title">Nuestros colaboradores</h3>
        <div className="collaborators-container">
            <span className="arrow-left"/>
               <a href="https://chile.generation.org/" target='blank'> <img className="collaborators" src={generation} alt=""/> </a>
               <a href="https://fundacionemplea.cl/" target='blank'> <img className="collaborators" src={femplea} alt=""/> </a>
                <a href="https://portales.bancochile.cl/personas" target='blank'><img className="collaborators" src={bchile} alt=""/></a>
                <a href="https://www.bhp.com/es" target='blank'><img className="collaborators" src={bhp} alt=""/></a>
            <span className="arrow right"/>
        </div>
        </div>
    )
}

export {Collaborators}