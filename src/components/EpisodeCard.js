import React from "react";
import { Cards } from "semantic-ui-react";

export default function EpisodeCard(props) {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="meta">airdate: {props.airDate}</div>
          <div className="description">episode #: {props.episodeNum}</div>
        </div>
      </div>
    </div>
  );
}
