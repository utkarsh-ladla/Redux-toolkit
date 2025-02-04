import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../store/Slice/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
  return (

    <>
    <div>Todo</div>
    {todos.map((todo) => (
        <li>{todo.text}
        <button 
        onClick={() => dispatch(removeTodo(todo.id))}
        >X</button>
        </li>
    ))} 
    </>
    
  )
}

export default Todos