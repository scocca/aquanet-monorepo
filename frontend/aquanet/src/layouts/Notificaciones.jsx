import React from 'react';
import { Notificacion } from '../layouts/Notificacion.css';
import { NavBarNotif } from '../components/NavBarNotif';
import { FooterNotif } from '../components/FooterNotif';
import { AsideNotif } from '../components/AsideNotif';
import { Main } from '../components/Main';

function Notificaciones() {
 return (
    <div className="Notifica">
      <NavBarNotif/>
      <AsideNotif>
        <button Onclick>A mi</button>
        <button Onclick>Favoritos</button>
        <button Onclick>Respuestas</button>
        <button Onclick>Me gustas</button>
        <button Onclick>Grupos</button>
    </AsideNotif>
    <Main>
        <button1/> 
        <button2/>
        <button3/>
    </Main>
      <FooterNotif />
    </div>
 );
}

export { Notificaciones };