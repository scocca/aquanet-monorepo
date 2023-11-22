const ResumePhoto=({url})=>{
    return(
        <>
        <div className="blog-photo-container">
            <img className="blog-photo" src={url} alt=''/>
        </div>
        </>
    )
}

export {ResumePhoto}