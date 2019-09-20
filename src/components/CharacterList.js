import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Grid, Image } from "semantic-ui-react";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.error("error:", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <Grid centered columns={3}>
        {characters.map(res => (
          <Grid.Column width={5}>
            <CharacterCard
              image={res.image}
              name={res.name}
              species={res.species}
              status={res.status}
              location={res.location}
            />
          </Grid.Column>
        ))}
      </Grid>
    </section>
  );
}
