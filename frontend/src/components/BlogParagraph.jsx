const BlogParagraph =({subtitle, paragraph})=>{
    return(
        <>
        <div className="blog-info-container">
        <h3 className="blog-sub-title">{subtitle}</h3>
        <p className="blog-detail">{paragraph}</p>
        </div>
        </>
    )
}

export {BlogParagraph}