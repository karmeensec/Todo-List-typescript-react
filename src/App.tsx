import { FC, useState } from 'react'
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import ToDoList from './components/ToDoList';


const App: FC = () => {

  const [toDoInput, setToDoInput] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [toDoPosition, setToDoPosition] = useState<string>('all');
  const [toDoFilter, setToDoFilter] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);

  const ToDoFilterHandler = function (): void {

    switch (toDoPosition) {

      case 'completed':
        setToDoFilter(todos.filter((todo: any) => todo.completed === true));
        break;

      case 'incomplete':
        setToDoFilter(todos.filter((todo: any) => todo.completed === false));

      default:
        setToDoFilter(todos);

    }

  }

  

  return <div >

      <header style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{  fontSize: '2.5rem', fontFamily:  'Gloria Hallelujah', color: '#F7F9F9',}}>Your To Do List</h3>
      </header>
      
      <AddTaskForm setToDoInput = {setToDoInput} todos = {todos} setTodos = {setTodos} toDoInput = {toDoInput} toDoPosition = {toDoPosition} setToDoPosition = {setToDoPosition} hasError = {hasError} setHasError = {setHasError} />
      <ToDoList todos = {todos} setTodos = {setTodos} />

    </div>

  
}

export default App
