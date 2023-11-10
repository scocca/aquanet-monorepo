import React from 'react'

const CardNotif =({props}) => {
return(
    <li className="container-card-list">
      <div className="card-left">
        <div className= "card-id">{props.id}</div>
        <div className="card-img"><img src={props.image}></img></div>
        <div className="card-right"></div>
        <div className="card-title">{props.title}</div>
        <p className="card-text">{props.text}</p>
      </div>
    </li>
  
 
) 
}
export {CardNotif};