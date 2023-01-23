import { useEffect } from 'react';
import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import ToDoList from './components/ToDoList';
import Signature from './components/Signature';



const App: FC = () => {

  const [toDoInput, setToDoInput] = useState<string>('');
  const [todos, setTodos] = useState<{ text: string, completed: boolean, id: number }[]>([]);
  const [toDoPosition, setToDoPosition] = useState<string>('all');
  const [toDoFilter, setToDoFilter] = useState<{ text: string, completed: boolean, id: number }[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const ToDoFilterHandler = function (): void {

    switch (toDoPosition) {

      case 'completed':
        setToDoFilter(todos.filter((todo: any) => todo.completed === false));
        break;

      case 'incomplete':
        setToDoFilter(todos.filter((todo: any) => todo.completed === true));
        break;

      default:
        setToDoFilter(todos);
        break;

    }

  }


//Trying to get data from local storage

  useEffect( ()=> {

    const data = window.localStorage.getItem('todos');
    if (data !== null) setTodos(JSON.parse(data));

  }, [])


  //Trying to save data to local storage

  useEffect( ()=> {

    ToDoFilterHandler();
    window.localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos, toDoPosition]);

 
  return <div >

      <header style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{  fontSize: '2.5rem', fontFamily:  'Gloria Hallelujah', color: '#F7F9F9',}}>Your To Do List</h3>
      </header>
      
      <AddTaskForm setToDoInput = {setToDoInput} todos = {todos} setTodos = {setTodos} toDoInput = {toDoInput} toDoPosition = {toDoPosition} setToDoPosition = {setToDoPosition} hasError = {hasError} setHasError = {setHasError} showError = {showError} setShowError = {setShowError}  />
      <ToDoList todos = {todos} setTodos = {setTodos} toDoFilter = {toDoFilter} />

      {/* <Signature /> */}

    </div>

  
}

export default App
