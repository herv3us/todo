import React, { useState } from 'react';

function Todo({ todos, inputValue, handleKeyDown, handleOnChange }) {
  return (
    <div className="whatToDo">
      <form className="todo-list">
        <input
          onKeyDown={(e) => handleKeyDown(e, e.target.value)}
          type="text"
          onChange={(e) => handleOnChange(e.target.value)}
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
