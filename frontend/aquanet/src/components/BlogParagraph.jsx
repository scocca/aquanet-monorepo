const BlogParagraph =({subtitle, paragraph})=>{
    return(
        <>
        <h3 className="blog-sub-title">{subtitle}</h3>
        <p className="blog-detail">{paragraph}</p>
        </>
    )
}

export {BlogParagraph}