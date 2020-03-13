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
          <h1>Women's Soccer Search Data</h1>
        </header>
        <p>Player Info below:</p>
        <PlayersContainer players={this.state.playerInfo} />
        <SubscriptionForm />
      </div>
    );
  }
}

export default App;
