import React from 'react'

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <div>
      <input
        type="text"
        name="search_box"
        id="search_box"
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Search Here'
      />
    </div>
  )
}
export default ColumnFilter
