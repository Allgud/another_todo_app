import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';
import InputForm from './components/InputForm';

import './App.css';

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  const handleChange = (event) => {
    const { value } = event.target
    setText(value)
  }

  return (
    <div className='app'>
      <InputForm 
        text={text}
        handleSubmit={addTask}
        handleChange={handleChange}
      />
      <TodoList />
    </div>
  );
}

export default App;
