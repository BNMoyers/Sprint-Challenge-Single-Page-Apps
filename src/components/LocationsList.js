import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard';
import { Grid, Image } from 'semantic-ui-react'

export default function LocationList() {
 const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(response => {
      setLocations(response.data.results);
    })
    .catch(error => {
      console.error('error', error)
    })
     }, [])

  return ( 
  <section className='location-list grid-view'>
    <Grid centered columns={3} >
      {locations.map(results => (
        <Grid.Column width={5}>
          <LocationCard  
              name = {results.name}
              dimension={results.dimension}
              residents={results.residents.length}/>
              </Grid.Column>

      ))}
      </Grid>
    </section>
  )
}



