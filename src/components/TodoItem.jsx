import React from "react";
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplited } from "../store/todoSlice";

const TodoItem = ({id, title, complited}) => {
    const dispatch = useDispatch()

    return (
        <li>
            <input 
                type="checkbox" 
                checked={complited} 
                onChange={() => dispatch(toggleTodoComplited({id}))}
            />
            <span className='todo-title'>{title}</span>
            <span className='del-btn' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}

export default TodoItem