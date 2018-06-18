import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div >
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">React Memory Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" : "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "pink"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;

   // <div className="App">
      //    <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React Memory Game</h1>
      //     <p></p>
      //   </header>        
      // </div>,