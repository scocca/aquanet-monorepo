const RoundPhoto=({photo})=>{
    return(
    <span className="photoContainer">
        <img className="profile-photo" src={photo} alt='portrait'/>
    </span>
    )
}

export {RoundPhoto}