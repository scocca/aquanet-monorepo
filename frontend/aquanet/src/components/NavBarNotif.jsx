import { React, useState } from 'react';
const NavBarNotif = () => {
    const [searchTerm, setSearchTerm] = useState('');
   
    const handleChange = (event) => {
       setSearchTerm(event.target.value);
    };
   
    return (
       <nav className="navbar">
         <div className="container">
           <form className="d-flex">
             <input
               className="NavBarunu"
               type="search"
               placeholder="Search"
               aria-label="Search"
               value={searchTerm}
               onChange={handleChange}
             />
             <button className="btn btn-outline-success" type="submit">Buscar</button>
             <button Onclick><a href="https://www.flaticon.es/iconos-gratis/buscar" title="buscar iconos">Buscar iconos creados por Freepik - Flaticon</a></button> 
           </form>
         </div>
       </nav>
    );
   };
   export {NavBarNotif}