import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC } from 'react'



const AddTaskForm = ( {setToDoInput}: any  ) => {

    const ToDoInputHandler = function (e: ChangeEvent<HTMLInputElement>): void {

        setToDoInput(e.target.value);

    }

  return (

        <form style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <input type="text" placeholder='Add your Task...' className='add-container-input'  style={{ width: '20%', border: 'none', outline: 'none', fontSize: '1.5rem', fontFamily: 'Indie Flower', background: 'transparent', color: '#F7F9F9', marginRight: '2rem', padding: '1rem' }} onChange= {ToDoInputHandler} />
            
            <button type='submit' className='add-container-button' >Add</button>

            <div>

                <select name="todos" className='filter-task' >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>

            </div>

        </form>

  )
}

export default AddTaskForm