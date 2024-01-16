import React from 'react'

function Search({ setSearchBy }) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => setSearchBy(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search