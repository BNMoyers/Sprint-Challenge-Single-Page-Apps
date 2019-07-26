import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EpisodeCard from './EpisodeCard';
import { Grid, Image } from 'semantic-ui-react'

export default function EpisodeList() {
 const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(response => {
      setEpisodes(response.data.results);
    })
    .catch(error => {
      console.error('error', error)
    })
     }, [])

  return ( 
  <section className='episode-list grid-view'>
    <Grid centered columns={3} >
      {episodes.map(results => (
        <Grid.Column width={5}>
          <EpisodeCard  
              name = {results.name}
              airDate={results.air_date}
              episodeNum ={results.episode}/>
              </Grid.Column>

      ))}
      </Grid>
    </section>
  )
}



