
import { CardNotif } from './CardNotif'

const ListItem = ({prope}) => {
    return(
    <ul className='list-notif-container'> 
      {prope.map((item, index)=>(
     <CardNotif key={index} props={item}/>
     ))}
    </ul> 
      )
    
}
export {ListItem};