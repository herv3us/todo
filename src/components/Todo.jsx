import React, { useState } from 'react';

function Todo() {
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

  const createNewTodo = (e, toodo) => {
    e.preventDefault();

    console.log(toodo);
    const newTodo = {
      content: toodo,
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

  const onChandeHandle = (e) => {
    setInputValue(e);
  };

  return (
    <div className="whatToDo">
      <form className="todo-list">
        <input
          onKeyDown={(e) => handleKeyDown(e, e.target.value)}
          type="text"
          onChange={(e) => onChandeHandle(e.target.value)}
          value={inputValue}
          placeholder="What to do... 🌮 🧵 🎮"
        />
      </form>
      <ul className="whatToDo-not-done">
        {todos.map((todo) => (
          <div className="whatToDo-not-done-todo">
            <div className="checkbox">
              <li
                key={Math.floor(Math.random() * 10)}
                className=" checkbox-container"
              >
                <input type="checkbox" className="checkbox-todo" />{' '}
                {todo.content} <br />
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
