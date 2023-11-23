import React from 'react';
import './ongs.css'
import { useState, useEffect } from 'react';
import { TodoCounter } from '../components/ongComponents/TodoCounter';
import { TodoSearch } from '../components/ongComponents/TodoSearch';
import { TodoList } from '../components/ongComponents/TodoList';
import { TodoItem } from '../components/ongComponents/TodoItem';
import { CreateTodo } from '../components/ongComponents/CreateTodo';


function ONGS() {
  const [completeList, setList] = useState([])
  const [search, setSearch] = useState([])
  const [finded, setFinded] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8054/api/v1/all-ong")
    .then((data)=>data.json())
    .then((data)=>setList(data.ongs))
  },[])
  console.log(completeList)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  useEffect(()=>{
    fetch(`http://localhost:8054/api/v1/ong-by-name/${search}`)
    .then((data)=>data.json())
    .then((data)=>setFinded(data.ongs))
  },[search])

  return (
    <React.Fragment>
    <section className='ongs-container-nodiv'>
      <div id='create' className='create'>
        <CreateTodo/>
        <input placeholder="Busqueda de ONG's" id="search" onChange={(e) => setSearch(e.target.value)} onSubmit={handleSubmit}></input> 
        <TodoList> 
        {finded.map(o=>(
          <TodoItem key={o.id} text={o.name}/>
        ))}
        </TodoList>
      </div>

      <div id='list' className='list'>
      <TodoCounter/>
        <TodoList> 
        {completeList.map(o=>(
          <TodoItem key={o.id} text={o.name}/>
        ))}
        </TodoList>
        </div>
    </section>
    </React.Fragment>
  );
}


export {ONGS};
