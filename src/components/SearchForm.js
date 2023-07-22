import React from 'react'

const SearchForm = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        name="search_box"
        id="search_box"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Search Here' 
        />
    </div>
  )
}
export default SearchForm
