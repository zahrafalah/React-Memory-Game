import React, { Component } from 'react';
// import React, { Props } from 'react';
import logo from './logo.svg';
import Card from "./components/card";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Navbar from "./components/Navbar"
import './App.css';

class App extends Component {

  state = {
    images: images,
    topScore: 0,
    curScore: 0,    
    unselectedImgs: images,
    message: "Click an image to begin!",
  }

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  
  selectFlow = name => {
    // name.preventDefault();
    // console.log(selectFlow);
    const findImg = this.state.unselectedFlow.find(item => item.name === name);

    if(findImg === undefined) {
        // failure to select a new Img
        this.setState({ 
            message: "You guessed incorrectly!",
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            images: images,
            unselectedFlow: images
        });
    }
    else {
        // success to select a new Img
        const newImgs = this.state.unselectedImgs.filter(item => item.name !== name);
        
        this.setState({ 
            message: "You guessed correctly!",
            curScore: this.state.curScore + 1,
            images: images,
            unselectedFlow: newImgs
        });
    }

    this.shuffleArray(images);
};


  render() {
    return [

      <Navbar
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
      />,

      // <div className="App">
      //    <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React Memory Game</h1>
      //     <p></p>
      //   </header>        
      // </div>,

      <Wrapper>  
         {/* /* <div className="row">   */}
            {/* <div className= "col-sm ">  */ }
              {this.state.images.map(image => (
                <Card
                  id={image.id}
                  key={image.id}
                  name={image.name}
                  image={image.image}
                />
              ))} 
            {/* </div>
        </div>        */}
      </Wrapper>
    ];
  }
}

export default App;
