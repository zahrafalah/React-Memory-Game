import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/card";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {

  state = {
    images
  };

  render() {
    return [

      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Memory Game</h1>
          <p></p>
        </header>        
      </div>,

      <Wrapper>  
            
        {this.state.images.map(image => (
          <Card
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}        
      </Wrapper>
    ];
  }
}

export default App;
