import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Grid, Image } from 'semantic-ui-react';

export default function EpisodeList() {
 const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
axios
.get("https://rickandmortyapi.com/api/episode/")
.then(res => {
    setEpisodes(res.data.results);
})
.catch(error => {
    console.error('error:', error)
})
}, [])

  return (<section className='episode-list grid-view'>

      <Grid centered columns={3}>
          {episodes.map(res => (
              <Grid.Column width={5}>
                  <EpisodeCard name={res.name}
                               airDate={res.air_date}
                               episodeNum={res.episode}/>
              </Grid.Column>
          ))}
      </Grid>
    </section>
  )
}
