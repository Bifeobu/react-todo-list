import { useState , useReducer } from 'react'

function ToDoList() {
    const initialState = [];

    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <>
            <h1>To-do List</h1>
        </>
    )
}

export default ToDoList