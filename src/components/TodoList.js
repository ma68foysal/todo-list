import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CopyButton from './CopyButton';
import CategoryFilter from './CategoryFilter';
import { BiSad } from 'react-icons/bi';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedCategories = [...new Set(storedTodos.map((todo) => todo.category))];
    setTodos(storedTodos);
    setCategories(storedCategories);
  }, []);

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodos = [
        ...todos,
        {
          text: task,
          category: category, 
        },
      ];
      setTodos(newTodos);
      setTask('');
      setCategory(''); 

      
      localStorage.setItem('todos', JSON.stringify(newTodos));


      const updatedCategories = [...new Set(newTodos.map((todo) => todo.category))];
      setCategories(updatedCategories);
    }
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === '' || todo.category === selectedCategory)
  );

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
      <input
      className="todo-input"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button  onClick={addTodo} className='todo-btn'>Add</button>
      </div>
      
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        setSearchQuery={setSearchQuery}
      />

        {filteredTodos.length === 0 ? (
        <p className='not-found'>Not found... <BiSad/></p>
      ) : (
        <ul className="">
          {filteredTodos.map((todo, index) => (
            <li className='incompleted Todo' key={index}>
              {todo.text}
              <CopyButton textToCopy={todo.text} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;