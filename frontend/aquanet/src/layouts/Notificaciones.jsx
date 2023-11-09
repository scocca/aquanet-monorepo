import './Notificacion.css';
import { NavBarNotif } from '../components/NavBarNotif';
import { FooterNotif } from '../components/FooterNotif';
import { AsideNotif } from '../components/AsideNotif';
import { Main } from '../components/Main';
import { CardNotif } from '../components/CardNotif';
import { ListItem } from '..components/ListItem';


function Notificaciones() {
 return (
    <div className="notifications-container">
      <NavBarNotif/> 
      <AsideNotif/>
    <Main>
        <CardNotif/>
        <ListItem/>
    </Main>
      <FooterNotif />
    </div>
 );
}

export { Notificaciones };