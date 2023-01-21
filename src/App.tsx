import { useEffect } from 'react';
import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import ToDoList from './components/ToDoList';


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

      default:
        setToDoFilter(todos);

    }

  }

  useEffect( ()=> {

    ToDoFilterHandler();
    ToDoSaveLocalStorage();

  }, [todos, toDoPosition]);



  const ToDoSaveLocalStorage = function (): void {

    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } 

    else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

  };

  

  return <div >

      <header style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{  fontSize: '2.5rem', fontFamily:  'Gloria Hallelujah', color: '#F7F9F9',}}>Your To Do List</h3>
      </header>
      
      <AddTaskForm setToDoInput = {setToDoInput} todos = {todos} setTodos = {setTodos} toDoInput = {toDoInput} toDoPosition = {toDoPosition} setToDoPosition = {setToDoPosition} hasError = {hasError} setHasError = {setHasError} showError = {showError} setShowError = {setShowError}  />
      <ToDoList todos = {todos} setTodos = {setTodos} toDoFilter = {toDoFilter} />

    </div>

  
}

export default App
