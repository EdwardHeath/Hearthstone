import React from 'react';
import './App.css';

import unirest from 'unirest';
import Card from './Components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unirest
      .get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?collectible=1')
      .header('X-RapidAPI-Host', 'omgvamp-hearthstone-v1.p.rapidapi.com')
      .header(
        'X-RapidAPI-Key',
        '1591b3e13emsh93e55e310134141p12b993jsn438babe5e85e'
      )
      .end(result => {
        console.log(result.body.Basic);
        this.setState({ cards: result.body.Basic });
      });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <ul>
          {cards.map(card => (
            <li key={card.cardId}>
              <img src={card.img} alt={card.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
