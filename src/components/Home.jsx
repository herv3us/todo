import React, { useState } from 'react';
import Todo from './Todo';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      content: 'Buy Chocolate',
      isDone: false,
    },
    {
      content: 'Get Lowa to the hairdresser',
      isDone: false,
    },
  ]);

  const createNewTodo = (e, createNewTodo) => {
    e.preventDefault();

    console.log(createNewTodo);
    const newTodo = {
      content: createNewTodo,
      isDone: false,
    };
    let newTodos = [...todos];
    newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleKeyDown = (e, value) => {
    if (e.key === 'Enter') {
      createNewTodo(e, value);
      setInputValue('');
    }
  };

  const handleOnChange = (e) => {
    setInputValue(e);
  };

  return (
    <div>
      <h1>What to do! 🤔</h1>
      <Todo
        todos={todos}
        inputValue={inputValue}
        handleKeyDown={handleKeyDown}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default Home;
