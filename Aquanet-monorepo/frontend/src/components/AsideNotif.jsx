const AsideNotif = () => {
  return (
     <aside className="aside-notif">
       <div className="aside-container-notif">
         <ul className="aside-menu-notif">
          <li className="notif-list" ><a to="/grupos">Grupos</a></li>
          <li className="notif-list" ><a className="list-anchor">A mi</a></li>
          <li className="notif-list" ><a className="list-anchor" >Favoritos</a></li>
          <li className="notif-list" ><a className="list-anchor" >Respuestas</a></li>
          <li className="notif-list" ><a className="list-anchor" >Me gustas</a></li>
          <li className="notif-list" ><a className="list-anchor" >Grupos</a></li>
         </ul>
       </div>
     </aside>
  );
 };
 export {AsideNotif}