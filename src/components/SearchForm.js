import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const SearchForm = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 300)

  return (
    <div>
      <input
        type="text"
        name="search_box"
        id="search_box"
        value={value || ''}
        onChange={
          (e) => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        placeholder='Search Here'
      />
    </div>
  )
}
export default SearchForm
