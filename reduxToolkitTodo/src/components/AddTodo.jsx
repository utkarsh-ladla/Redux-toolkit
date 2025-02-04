import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from "../store/Slice/todoSlice"
//we have to use dispatched and 
function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.prevent.Default()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-bold mb-4">Add Todo</h2>
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 w-full rounded-l-md"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
        Add
      </button>
    </div>
  </form>
  )
}

export default AddTodo