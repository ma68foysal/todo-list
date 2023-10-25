import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List</h1>
      <div className="TodoForm">
      <input
      className="todo-input"
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo} className='todo-btn'>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li className='incompleted Todo' key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;