import React, { FC } from 'react'
import ToDo from './ToDo'

const ToDoList:FC = () => {

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <ul style={{ listStyle: 'none', fontSize: '1.5rem', fontFamily: 'Indie Flower', color: '#F7F9F9', minWidth: '50vh', }}>
        <ToDo />
      </ul>
      
    </div>

  )
}

export default ToDoList