import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodoComplited, removeTodo}) => (
    <ul>
        {
            todos.map(todo => {
                return (
                    <TodoItem 
                        key={todo.id}
                        toggleTodoComplited={toggleTodoComplited}
                        removeTodo={removeTodo}
                        {...todo}
                    />
                )
            })
        }
    </ul>
)

export default TodoList