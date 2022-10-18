import React, { useState } from 'react';
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';

import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setText(value)
  }

  const toggleTodoComplited = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            complited: !todo.complited
          }
        }
        return todo
      })
    )
  } 

  const removeTodo = (id) => {
    setTodos(todos.filter(el => el.id !== id))
  }

  const addTodo = () => {
    if(text.trim().length){
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: text,
          complited: false
        }
      ])
      setText('')
    }
  }

  return (
    <div className='app'>
      <InputForm 
        text={text}
        handleSubmit={addTodo}
        handleChange={handleChange}
      />
      <TodoList 
        todos={todos}
        toggleTodoComplited={toggleTodoComplited}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
