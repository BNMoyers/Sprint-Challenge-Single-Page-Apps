import React from 'react'
import { Cards } from 'semantic-ui-react'

export default function CharacterCard (props) {
  console.log(props)
  return(
    <div className="ui card">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="content">
        <h2 className="header">{props.name}</h2>
        <div className="meta">
          <span className="date">{props.species} </span>
          <span className="date">{props.status}</span>
        </div>
      </div>
      <div className="extra content">
      <div>{props.location.name}</div>
      </div>
    </div>
  )
}
