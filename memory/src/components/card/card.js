import React from 'react';
import './card.css';


const card = props => (
  <div className="card" >
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default card;