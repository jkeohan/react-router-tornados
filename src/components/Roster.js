import React from 'react';
import players from './players'
import FullRoster from './FullRoster'
import Player from './Player'
import { Switch, Route } from 'react-router-dom'

// Originally this was a functional component however the need to
// pass a value back up to Roster from FullRoster required that it
// be upgraded to a Class Based Component
class Roster extends React.Component {

  constructor() {
    super()
    this.state = {
      activePlayer: []
    }
  }

handleClick = (number) => {
  console.log('this is handleClick', number)
  this.findPlayer(number)
}

findPlayer = (number) => {
  // console.log('this is players variable', players)
  let activePlayer = players.players.filter( d => d.number === number)
  console.log('this is activePlayer', activePlayer)
  this.setState(prevState => ({
    activePlayer
  }))
}

render() {
    return (
      <Switch>
        <Route exact path='/roster'
          render={(props) => <FullRoster {...props}
          players={players}
          handleClick={this.handleClick}
          />}
        />
        <Route exact path='/roster/:id'
          render={(props) => <Player {...props}
          playerInfo={this.state.activePlayer[0]}
          />}
        />
      </Switch>
    )
  }
}

export default  Roster
