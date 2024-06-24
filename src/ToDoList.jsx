import TodoItem from './TodoItem';

function ToDoList({ todos, toggleTodo, deleteTodo }) {

    return(
        <>
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} 
                todo={todo} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo}/>
            ))}
        </ul>
        </>
    );
};

export default ToDoList