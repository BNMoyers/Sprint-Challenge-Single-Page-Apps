import React from 'react'
import { Cards } from 'semantic-ui-react'

export default function LocationCard (props) {
  console.log(props)
  return(
    <div className="ui cards">
    <div className="card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">{props.dimension}</div>
        <div className="description">
          Residents: {props.residents}
        </div>
      </div>
    </div>
    </div>
  )
}
