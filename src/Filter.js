import React, {useState} from 'react'

function Filter({search,setSearch}){
    return(
      <form className="searchbar" >
      <input onChange={e => {
        setSearch(e.target.value);
      }}
        type="text"
        id="search"
        placeholder="search for cuisine by name"
        value={search}
      />
      <button type="submit">🔍</button>
    </form>
    )
}
export default Filter;