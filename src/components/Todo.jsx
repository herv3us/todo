function Todo({
  todos,
  inputValue,
  handleKeyDown,
  handleOnChange,
  handleClick,
}) {
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
          <div key={todo.id} className="whatToDo-not-done-todo">
            <li className=" checkbox-container">
              {todo.content} <br />
              <button onClick={() => handleClick(todo.id)}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
