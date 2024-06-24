import { useState, useReducer } from 'react';
import TodoList from './ToDoList';
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id })
  };


  return (
    <>
      <div>
        <h1>To-do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={state} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
