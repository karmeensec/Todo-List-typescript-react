import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm'

const App: FC = () => {

  return (

    <div>

      <h1>Your To Do List</h1>

      <AddTaskForm />

    </div>

  )
}

export default App
