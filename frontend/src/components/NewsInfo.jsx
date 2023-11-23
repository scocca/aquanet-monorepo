import React from 'react'

const NewsInfo = (props) => {
  const {titleNews, textNews} = props;

  return (
    <div className="blog-info-container">
        <h3 className="blog-sub-title"> {titleNews} </h3>
        <p className="blog-detail"> {textNews} </p>
    </div>
  )
}

export{NewsInfo}