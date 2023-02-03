import React from 'react'
import {VscCheck, VscTrash} from 'react-icons/vsc'

const ToDo = ({ text, todos, setTodos, todo}: any) => {

  const ToDoDeleteHandler = function(): void {

    // setTodos(todos.filter((t: any) => t.text !== text));
    setTodos(todos.filter((t: any) => t.id !== todo.id));
    
  }

  const ToDoCompleteHandler = function(): void {

    setTodos(todos.map((t: any) => {
 
      if (t.id === todo.id) {

        return {...t,  completed: !t.completed}

      }

      return t;

    }))

  }

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '1s ease-in-out', margin: '1rem',  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', padding: '.7rem', borderRadius: '1rem'  }} >

      <li className={`todo-task ${!todo.completed ? 'completed' : ''}`} style={{ width: '300px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}> 
        {text} 
      </li>

        <button type='submit' className='complete-button' onClick={ToDoCompleteHandler}> <VscCheck /> </button>
        <button type='submit' className='trash-button' onClick={ToDoDeleteHandler}> <VscTrash /> </button>

    </div>

  )
}

export default ToDo