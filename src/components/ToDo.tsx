import React from 'react'
import {VscCheck, VscTrash} from 'react-icons/vsc'

const ToDo = ({ text}: any) => {

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '1s ease-in-out'  }} >

        <li style={{ padding: '1rem' }}> {text} </li>
        <button type='submit' className='complete-button'> <VscCheck /> </button>
        <button type='submit' className='trash-button'> <VscTrash /> </button>

    </div>

  )
}

export default ToDo