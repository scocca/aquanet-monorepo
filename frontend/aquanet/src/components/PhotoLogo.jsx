import React from 'react'
import photologo from '../assets/Images/photologo.png'

const PhotoLogo = () => {
  return (
    <div className="photo-logo">
        <img className="photo-logo-img" src={photologo} alt='photologo'/>
    </div>
  )
}

export default PhotoLogo;