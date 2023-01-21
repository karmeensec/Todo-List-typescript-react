import React, { FC } from 'react'
import ToDo from './ToDo'


const ToDoList = ({ todos, setTodos, toDoFilter }: any) => {

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <ul style={{ listStyle: 'none', fontSize: '1.5rem', fontFamily: 'Indie Flower', color: '#F7F9F9', minWidth: '50vh', }}>
          {toDoFilter.map( (todo: any) => ( 
            <ToDo text = {todo.text} id = {todo.id} key={todo.id} todos = {todos} setTodos = {setTodos} todo={todo} />
          ))}
      </ul>
      
    </div>

  )
}

export default ToDoList