import React, { useContext, useState } from 'react'
import { SearchedContext } from './context/searchContext';
import "./search.css"
function Searchbar() {
  
  const {searchResult}=useContext(SearchedContext);
  return (
    <div>
        <input className='searchbar' type="search" onChange={(e)=>searchResult(e.target.value)} placeholder='Search for a contact'/>
    </div>
  )
}

export default Searchbar