import React, { ChangeEvent, FC } from 'react'



const AddTaskForm = ( {setToDoInput, todos, setTodos, toDoInput, toDoPosition, setToDoPosition, hasError, setHasError}: any  ) => {

    const ToDoInputHandler = function (e: ChangeEvent<HTMLInputElement>): void {

        setToDoInput(e.target.value);

    }

    const ToDoSubmitHandler = function(e: any): void {

        e.preventDefault();

        if (toDoInput !== '') {
            setTodos([...todos, {text: toDoInput, completed: 'false', id: Math.random() * 1000 }]);
            setHasError(false);
        }
        else {
            setHasError(true);
        }

        setToDoInput('');
        
    }


    const ToDoPositonHandler = function(e: any): void {

        setToDoPosition(e.target.value);

    }

  return (

        <form style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <input type="text" placeholder='Add your Task...' className='add-container-input' value={toDoInput} style={{ width: '20%', border: 'none', outline: 'none', fontSize: '1.5rem', fontFamily: 'Indie Flower', background: 'transparent', color: '#F7F9F9', marginRight: '2rem', padding: '1rem' }} onChange= {ToDoInputHandler} />
            
            <button type='submit' className='add-container-button' onClick={ToDoSubmitHandler} >Add</button>

            <div>

                <select onChange={ToDoPositonHandler} name="todos" className='filter-task' >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>

            </div>

            { hasError && <div className="error-message">Please Enter a Todo</div>}

        </form>

  )
}

export default AddTaskForm