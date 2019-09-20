import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(response.data.results);
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
              image={results.image}
              name={results.name}
              species={results.species}
              status={results.status}
              location={results.location}
            />
          </Grid.Column>
        ))}
      </Grid>
    </section>
  );
}
