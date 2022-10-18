import React from "react";

const TodoItem = ({id, title, complited, toggleTodoComplited, removeTodo}) => (
    <li>
        <input 
            type="checkbox" 
            checked={complited} 
            onChange={() => toggleTodoComplited(id)}
        />
        <span className='todo-title'>{title}</span>
        <span className='del-btn' onClick={() => removeTodo(id)}>&times;</span>
    </li>
)

export default TodoItem