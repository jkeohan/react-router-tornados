import React from 'react';
import {Link} from 'react-router-dom'

function Player(props) {
  console.log('this is props from Player', props.playerInfo)
  if(!props.playerInfo) {
    return (<div>Player Not Found</div>)
  }
  return (
    <div>
      <h1>{props.playerInfo.name} (#{props.playerInfo.number})</h1>
      <h2>Position: {props.playerInfo.position}</h2>
      <button><Link to='/roster'>Back</Link></button>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default  Player
