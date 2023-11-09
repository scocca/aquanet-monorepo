import React from 'react'
import CardNotif from './components/CardNotif'

 const ListItem = (props) => {
  const data = props.data
  const filter = data.filter((a) => a.id ===props.id)


  const listItem = data.map((item) => {
    return(
     <Card
       id={item.id}
       image={item.image}
       title={item.title}
       text={item.text}
       />
      );
    });
    return(
      <div className="ListItem"></div>
    )
}
export default ListItem;