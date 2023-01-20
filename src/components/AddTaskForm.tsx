import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

const AddTaskForm:FC = () => {

  return (

        <form style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <input type="text" placeholder='Add your Task...' className='add-container-input'  style={{ border: 'none', outline: 'none', fontSize: '1.5rem', fontFamily: 'Indie Flower', background: 'none', color: '#F7F9F9', }} />
            
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