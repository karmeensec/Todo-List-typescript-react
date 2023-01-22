import { useEffect } from 'react';
import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import ToDoList from './components/ToDoList';
import {CgCopyright} from 'react-icons/cg'
import Signature from './components/Signature';



const App: FC = () => {

  const [toDoInput, setToDoInput] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [toDoPosition, setToDoPosition] = useState<string>('all');
  const [toDoFilter, setToDoFilter] = useState<string[]>([]);
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

  useEffect( ()=> {

    ToDoFilterHandler();
    ToDoSaveLocalStorage();

  }, [todos, toDoPosition]);

  useEffect( ()=> {

    ToDoRetrieveLocalStorage();

  }, [])



  const ToDoSaveLocalStorage = function (): void {

      localStorage.setItem('todos', JSON.stringify(todos));

  };

  const ToDoRetrieveLocalStorage = (): any => {

    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }

    else {
      let storedTodos = JSON.parse(localStorage.getItem('todos') as string);
      if(storedTodos) setTodos(storedTodos);
    }

  };

  

  return <div >

      <header style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{  fontSize: '2.5rem', fontFamily:  'Gloria Hallelujah', color: '#F7F9F9',}}>Your To Do List</h3>
      </header>
      
      <AddTaskForm setToDoInput = {setToDoInput} todos = {todos} setTodos = {setTodos} toDoInput = {toDoInput} toDoPosition = {toDoPosition} setToDoPosition = {setToDoPosition} hasError = {hasError} setHasError = {setHasError} showError = {showError} setShowError = {setShowError}  />
      <ToDoList todos = {todos} setTodos = {setTodos} toDoFilter = {toDoFilter} />

       <footer style={{ position: 'absolute', left: '0', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '.1rem', fontSize: '16px', fontFamily: 'Indie Flower', color: '#F7F9F9', background: 'transparent' }}> <CgCopyright /> Copyright by Kamil Ismayilzada. </footer> 
      {/* <Signature /> */}
    </div>

  
}

export default App
