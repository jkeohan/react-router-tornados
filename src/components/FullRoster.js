import React from 'react';
import { Link } from 'react-router-dom'

function FullPlayer(props) {
    console.log('this is FullPlayer - props', props)
    let players =  props.players.players.map( (d,i) => {
      return <li
        key={i}
        onClick={() => props.handleClick(d.number)}
      >
        <Link to={`/roster/${d.number}`}>{d.name}</Link>
      </li>
    })
  return (
    <ul>
      {players}
    </ul>
  );
}

export default  FullPlayer
