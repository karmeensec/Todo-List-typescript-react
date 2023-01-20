import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'

const App: FC = () => {

  return <div >

      <header style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{  fontSize: '2.5rem', fontFamily:  'Gloria Hallelujah', color: '#F7F9F9',}}>Your To Do List</h3>
      </header>
      
      <AddTaskForm />

    </div>

  
}

export default App
