import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now().toString(),
                title: action.payload.text,
                complited: false
            })
        },
        toggleTodoComplited(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.complited = !toggledTodo.complited
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplited} = todoSlice.actions
export default todoSlice.reducer