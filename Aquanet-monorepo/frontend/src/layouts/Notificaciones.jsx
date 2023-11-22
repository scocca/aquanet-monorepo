import './Notificacion.css';

import data from '../assets/Json/notif.json'

import { NavBarNotif } from '../components/NavBarNotif';
import { FooterNotif } from '../components/FooterNotif';
import { AsideNotif } from '../components/AsideNotif';
import { CardNotif } from '../components/CardNotif';


function Notificaciones() {
 return (
    <div className="notifications-container">
      <NavBarNotif/> 
      <AsideNotif/>
      <ul className='list-notif-container'> 
        {data.map((item, index)=>(
          <CardNotif key={index} props={item}/>
     ))}
    </ul> 
      <FooterNotif />
    </div>
 );
}

export { Notificaciones };