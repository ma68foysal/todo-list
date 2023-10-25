import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div>
      <input
      className="todo-search"
        type="text"
        placeholder="Search tasks"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;