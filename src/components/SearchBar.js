import React from 'react';

function SearchBar({ onSearch , Ref }) {

  return (
    <div>
      <input
      ref={Ref}
      className="todo-search"
        type="text"
        placeholder="Search tasks"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;