import { useState } from 'react'

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

    return(
        <>
        </>
    )
}

export default TodoForm