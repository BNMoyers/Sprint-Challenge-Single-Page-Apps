import React, { useState, useEffect } from 'react';

export default function SearchForm({onSearch, characters}) {

  const [query, setQuery] = useState({
    name: ""
  })
  const [queryResults, setQueryResults] = useState([])
  
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }


  useEffect(() => {
    console.log('characters', characters)
    const results = characters.filter( character => character.name.includes(query))
  })  

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
