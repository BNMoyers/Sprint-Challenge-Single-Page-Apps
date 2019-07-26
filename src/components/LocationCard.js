import React from 'react'
import { Cards } from 'semantic-ui-react'

export default function LocationCard (props) {
  console.log(props)
  return(
    <div class="ui cards">
    <div class="card">
      <div class="content">
        <div class="header">{props.name}</div>
        <div class="meta">{props.dimension}</div>
        <div class="description">
          Residents: {props.residents}
        </div>
      </div>
    </div>
    </div>
  )
}
