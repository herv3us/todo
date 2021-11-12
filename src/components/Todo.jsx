import React, { useEffect, useState } from 'react';

function Todo() {
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
    }
  };

  return (
    <div className="whatToDo">
      <ul className="whatToDo-not-done">
        {todos.map((todo) => (
          <div className="whatToDo-todo">
            <div className="checkbox">
              <li key={Math.floor(Math.random() * 10)}> {todo.content} </li>
            </div>
          </div>
        ))}
      </ul>
      <form className="todo-list">
        <input
          type="text"
          placeholder="What to do..."
          onKeyDown={(e) => handleKeyDown(e, e.target.value)}
        />
      </form>
    </div>
  );
}

export default Todo;
