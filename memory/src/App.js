import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./components/card";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Title from './components/Title';
import './App.css';

class App extends Component {

  state = {
    images: images,
    topScore: 0,
    curScore: 0,    
    unselectedFlow: images,
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
      
     const  findImg = this.state.unselectedFlow.find(item => item.name === name);
       console.log(findImg);

    if(findImg == undefined) {
       console.log("Hi")
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
      console.log("hello");
        // success to select a new Img
        const newImgs = this.state.unselectedFlow.filter(item => item.name !== name);
        
        this.setState({ 
            message: "You guessed correctly!",
            curScore: this.state.curScore + 1,
            images: images,
            unselectedFlow: newImgs
        });
    }

    this.shuffleArray(images);
};

// gameOver = () => {
//   if (this.state.curScore > this.state.topScore) {
//     this.setState({topScore: this.state.curScore}, function() {
//       console.log(this.state.topScore);
//     });
//   }
//   this.state.images.forEach(image => {
//     image.clicked = 0;
//   });  
//   this.setState({
//     curScore: 0,
//     message: "Game Over!"
//   });
//   // return true;
// }

  //  selectFlow = name => {
      
          
  
  //     if(this.state.name.clicked === 0) {
  //       this.setState(this.state.name.clicked  === 1 );

  //        if(this.state.curScore < 11){
  //         this.setState((prevState)=> {
  //           return { curScore: prevState.curScore + 1 }; })
  //       }
  //       else
  //       this.setState(() => {return {curScore: 12, message: "You won!"}; })
  //    }
        
  //    else if (name.target.clicked === 1){
  //     // this.restart();
  // } 
   
      
  // }


  render() {
    return (
      <Wrapper>  
      <Navbar
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
      />
         <Title />
       
              {this.state.images.map(image => (

                <Card
                  id={image.id}
                  key={image.id}
                  clicked={image.clicked}
                  name={image.name}
                  image={image.image}
                  selectFlow={this.selectFlow} 
                  curScore={this.state.curScore}                  
                />

              ))
              } 
        
      </Wrapper>
    );
  }
}

export default App;
