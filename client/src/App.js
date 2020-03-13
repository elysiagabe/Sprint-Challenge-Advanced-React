import React from 'react';
import axios from 'axios';
// styles
import './App.css';
// components
import PlayersContainer from './components/PlayersContainer';
import SubscriptionForm from './components/SubscriptionForm'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      playerInfo: []
    }
  }

  componentDidMount() {
    //will run axios to fetch data here
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({
          playerInfo: res.data
        })
      })
      .catch(err => console.log('Oops! There was an error', err))
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>100 Most Searched Women's World Cup Players</h1>
          <h2 className="subtitle">Data collected by Google Trends from June-July 2019, worldwide.</h2>
        </header>
        <PlayersContainer players={this.state.playerInfo} />
        <SubscriptionForm />
      </div>
    );
  }
}

export default App;
