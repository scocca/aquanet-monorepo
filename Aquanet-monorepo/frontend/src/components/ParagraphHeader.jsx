import React from 'react'

const ParagraphHeader = (props) => {
  

  const{name,texto} = props;


  return (
    <div className="info-container">
      <div className="name-region">
      <h1 className="name-region-p">{name}</h1>
            
           
        </div>
        <div>
            <div className="info-region-container">
                <p className="info-region">{texto}</p>
            </div>
        </div>

    </div>
  )
}

export {ParagraphHeader}