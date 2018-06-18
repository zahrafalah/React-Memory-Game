import React from 'react';
import './card.css';

const card = props => (
  <div className="card" >
      <a onClick={() => props.selectFlow(props.name)} 
          className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}>
        <img className="card-img" src={props.image} alt={props.name}/>
      </a>
  </div>
);

export default card;