
import React, { useState } from 'react';
function Main () {
    
    
    const Main = () => {
     const [clickedCount, setClickedCount] = useState(0);
    
     const handleButtonClick = () => {
        setClickedCount(clickedCount + 1);
     };
    
     const opacity = 1 - clickedCount * 0.1;
    
     return (
        <div className="botonNotif">
          <button1
            className="botonnotif"
            style={{ backgroundColor: `rgba(0, 0, 255, ${opacity})` }}
            onClick={handleButtonClick}>
            <div className="navbar-icon-left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/1121px-Coraz%C3%B3n.svg.png" alt="Corazón" />
              <div className="navbar-icon-right">
              <img src="https://flyclipart.com/thumb2/carta-icon-png-png-image-604218.png" alt="Carta" />
            </div>
            </div>
            <div className="navbar-text1">
              <h1>Fulanito respondió a tu post:</h1>
              <p>xxxxxxxxxxxxxxxxxxxxxx</p>
              <p>"Hace x minutos"</p>
            </div>
          </button1>
          <button2>
            <div className="navbar-text2">
              <h2>Fulanito le dio me gusta a tu post"xxxxxxx": </h2>
              <p>"Hace x minutos"</p>
            </div>
          </button2>
          <button3>
            <div className="navbar-text3">
              <h3>Fulanito te siguió</h3>
              <p>"Hace x minutos"</p>
            </div>
          </button3> 
        </div>
     );
    };

}
export {Main}