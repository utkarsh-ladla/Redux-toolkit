import React from 'react'
import{useDispatch, useSelector} from "react-redux"
import { Increment, Decrement } from '../store/slice/counterSlice'

function Counter() {
    const count  = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(Increment())}>increment</button>
    <button onClick={() => dispatch(Decrement())}>decrement</button>
  </div>
  )

}

export default Counter