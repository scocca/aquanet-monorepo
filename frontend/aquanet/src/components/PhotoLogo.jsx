import React from 'react'
import chile from '../assets/Images/chile.jpg'

const PhotoLogo = () => {
  return (
    <div className="photo-logo">
        <img className="photo-logo-img" src={chile} alt='photologo'/>
    </div>
  )
}

export { PhotoLogo }