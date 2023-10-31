const Collaborators = ({generation, femplea, bchile, bhp}) =>{
    return(
        <div className="end-container">
        <h3 className="collaborators-title">Nuestros colaboradores</h3>
        <div className="collaborators-container">
            <span className="arrow-left"/>
                <img className="collaborators" src={generation} alt=""/>
                <img className="collaborators" src={femplea} alt=""/>
                <img className="collaborators" src={bchile} alt=""/>
                <img className="collaborators" src={bhp} alt=""/>
            <span className="arrow right"/>
        </div>
        </div>
    )
}

export {Collaborators}