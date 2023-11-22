import { React, useState } from 'react';
const NavBarNotif = () => {
    const [searchTerm, setSearchTerm] = useState('');
   
    const handleChange = (event) => {
       setSearchTerm(event.target.value);
    };
   
    return (
       <nav className="navbar-notif">
         <div className="container-navbar-notif">
           <form className="d-flex">
            <div className='user-notif-background'>
           <img
          className="user-image-notif"
          src="https://4.bp.blogspot.com/-sKHAkR4l6Fo/TmGycBQ_EgI/AAAAAAAAN2E/tU1ZK2yqlFU/s1600/Lindos-Perritos_07.jpg"
          alt="Fulanito"
        />
        <p className="user-name-notif">Fulanito</p>
        </div>
             <input
               className="NavBarunu"
               type="search"
               placeholder="Search"
               aria-label="Search"
               value={searchTerm}
               onChange={handleChange}
             />
             <button className="btn-outline-success" type="submit">/</button>
            </form>
         </div>
       </nav>
    );
   };
   export {NavBarNotif}