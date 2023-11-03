const Aside = () => {
    return (
       <aside className="aside">
         <div className="aside-container">
           <ul className="aside-menu">
             <li>
               <Link to="/mi">A mi</Link>
             </li>
             <li>
               <Link to="/favoritos">Favoritos</Link>
             </li>
             <li>
               <Link to="/respuestas">Respuestas</Link>
             </li>
             <li>
               <Link to="/me-gustas">Me gustas</Link>
             </li>
             <li>
               <Link to="/grupos">Grupos</Link>
             </li>
           </ul>
         </div>
       </aside>
    );
   };
   export {AsideNotif}