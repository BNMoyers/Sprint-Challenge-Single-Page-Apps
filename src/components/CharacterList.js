import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CharacterList() {
 const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    const getCharacters = () => {

    }
  }, [characters])

  return <section className='character-list grid-view'>

      {characters.map(character => (

      ))}
    </section>

}
