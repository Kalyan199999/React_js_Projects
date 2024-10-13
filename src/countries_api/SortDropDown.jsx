import React from 'react'

function SortDropDown({sortOrder , handleSortOrder}) {

  return (
    <select value={sortOrder} onChange={(e)=>{handleSortOrder(e)}}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
    </select>
  )
}

export default SortDropDown
