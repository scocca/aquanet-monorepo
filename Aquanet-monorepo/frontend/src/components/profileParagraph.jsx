const ProfileParagraph = ({userName, description,settingIcon}) =>{
    return(
    <div className="profile-description-container">
        <div className="profile-user-name">
        <h1 className="user-name">{userName}</h1>
        <img className='setting-icon' src={settingIcon} alt="settings"/> 
        </div>
        <div className="profile-description-container">
        <p className="profile-description">{description}</p>
        </div>
    </div>
    )
}
export {ProfileParagraph}