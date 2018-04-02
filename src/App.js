import React, { Component } from 'react';
import './App.css';
import TailCard from './components/TailCard';

class App extends Component {
  render() {
    return (
      <div className="App flex flex-wrap justify-around">
        <TailCard title="Example" body="Use .justify-around to justify items along the flex container's main axis such that there is an equal amount of space around each item:" image="https://i.pinimg.com/originals/e5/27/c7/e527c79c952994f7dc6aed563242a3a7.jpg"/>
        <TailCard title="React" body="Include popular icons in your React projects easly with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using." image="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" />
      </div>
    );
  }
}

export default App;
