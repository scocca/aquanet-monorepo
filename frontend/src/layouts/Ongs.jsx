import React from 'react';
import './ongs.css'

import { TodoCounter } from '../components/ongComponents/TodoCounter';
import { TodoSearch } from '../components/ongComponents/TodoSearch';
import { TodoList } from '../components/ongComponents/TodoList';
import { TodoItem } from '../components/ongComponents/TodoItem';
import { CreateTodo } from '../components/ongComponents/CreateTodo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const defaultONGS =[
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true},
  {text: 'femplea', following: true}
]

function ONGS() {
  return (
    <React.Fragment>
    <section className='ongs-container-nodiv'>
      <div id='create' className='create'>
        <CreateTodo/>
        <TodoSearch/>
      </div>

      <div id='list' className='list'>
      <TodoCounter/>
        <TodoList> 
        {defaultONGS.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed ={todo.completed}/>
        ))}
        </TodoList>
        </div>
    </section>
    </React.Fragment>
  );
}


export {ONGS};
