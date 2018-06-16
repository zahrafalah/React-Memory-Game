import React from 'react';
import './card.css';


const card = props => (
  <div className="card" >
    <img className="card-img" src={props.image} alt={props.name}/>
  </div>
);

{/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
</span> */}

export default card;