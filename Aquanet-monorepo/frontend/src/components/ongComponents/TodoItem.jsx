function TodoItem(props){
    return(
      <li id="task">
        <p>{props.text}</p>
        <p id="todo-item-p-hidden">{props.id}</p>
      </li>
    )
  }

  export {TodoItem};