import { useState, useReducer } from 'react';
import ToDoList from './ToDoList';
import TodoForm from './TodoForm';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};


function App() {

  return (
    <>
    </>
  )
}

export default App
