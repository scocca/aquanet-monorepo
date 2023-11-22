function TodoItem(props){
    return(
      <li id="task">
        <p>{props.text}</p>
      </li>
    )
  }

  export {TodoItem};