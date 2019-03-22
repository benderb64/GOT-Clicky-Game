import React from "react";
import "./card.css";

const Cards = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.character} src={props.image} />
      <div className="overlay">
        <div className="text">
        {props.character}
          <br />
          of 
          <br />
          {props.title} from {props.from}
        </div>
      </div>
    </div>
  </div>
);

export default Cards;