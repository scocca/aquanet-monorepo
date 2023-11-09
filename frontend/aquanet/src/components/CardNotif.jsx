import React from 'react'

const CardNotif =(props) => {
return(
    <div className="container-card">
      <div className="card-left">
        <div className= "card-id">{props.id}</div>
        <div className="card-img"><img src={props.image}></img></div>
        <div className="card-right"></div>
        <div className="card-title">{props.title}</div>
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  
 
) 
}
export default Card;