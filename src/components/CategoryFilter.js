import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange,setSearchQuery,searchQuery,Ref }) {
   const selectCategory = ( e) =>{
       onCategoryChange(e.target.value)
      Ref.current.value = ''
       setSearchQuery("")
    }
    console.log(searchQuery);

  return (
    <div className='category-box'>
      <label className='categoryFilter' htmlFor="categorySelect">Filter by Category:</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={(e) => selectCategory(e)}
        className='categorySlect'
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;