import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { Grid, Image } from 'semantic-ui-react';

export default function LocationList() {
 const [locations, setLocations] = useState([]);

  useEffect(() => {
axios
.get("https://rickandmortyapi.com/api/location/")
.then(res => {
    setLocations(res.data.results);
})
.catch(error => {
    console.error('error:', error)
})
}, [])

  return (<section className='location-list grid-view'>

      <Grid centered columns={3}>
          {locations.map(res => (
              <Grid.Column width={5}>
                  <LocationCard name={res.name}
                               dimension={res.dimension}
                               residents={res.residents.length}/>
              </Grid.Column>
          ))}
      </Grid>
    </section>
  )
}