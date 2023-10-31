const ProfileParagraph = ({userName, description}) =>{
    return(
    <div className="profile-description-container">
        <div className="profile-user-name">
        <h1 className="user-name">{userName}</h1>
        <span className="settings">settings</span>
        </div>
        <div className="profile-description-container">
        <p className="profile-description">{description}</p>
        </div>
    </div>
    )
}
export {ProfileParagraph}