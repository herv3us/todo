import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Todo from './Todo';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      content: 'Buy Chocolate',
      isDone: false,
      id: nanoid(30),
    },
    {
      content: 'Get Lowa to the hairdresser',
      isDone: false,
      id: nanoid(30),
    },
  ]);

  const createNewTodo = (e, createNewTodo) => {
    e.preventDefault();
    let newTodos = [...todos];

    console.log(createNewTodo);
    const newTodo = {
      content: createNewTodo,
      isDone: false,
      id: nanoid(30),
    };
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

  const handleClick = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return id !== todo.id;
      });
    });
  };

  return (
    <div>
      <h1>What to do! 🤔</h1>
      <Todo
        todos={todos}
        inputValue={inputValue}
        handleKeyDown={handleKeyDown}
        handleOnChange={handleOnChange}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Home;
