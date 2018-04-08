import React, { Component } from 'react';
import './App.css';
import TailCard from './components/TailCard';

class App extends Component {
  render() {
    return (
      <div className="App flex flex-wrap justify-around">
        <TailCard
          title="Arctic Monkeys"
          body="Arctic Monkeys are an English rock band formed in 2002 in High Green, a suburb of Sheffield."
          image="https://www.eventcombo.com/Images/ECImages/7761590f-fe6f-4b5b-8f6f-6f44cf817d50.jpg"
        />
        <TailCard
          title="Phoenix"
          body="Phoenix are an indie pop band from Versailles, France,consisting of Thomas Mars, Deck d'Arcy, Christian Mazzalai and Laurent Brancowitz."
          image="http://www.pressherenow.com/photos/189_Phoenix_mainimage.jpg.jpg"
        />
      </div>
    );
  }
}

export default App;
