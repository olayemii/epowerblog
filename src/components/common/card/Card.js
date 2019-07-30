import React from "react";

import "./Card.css";

function Card(props) {
  let { title, thumbnail, excerpt, onClick } = props;
  return (
    <div className="Card" onClick={onClick}>
      <div className="card-body">
        <div className="card-image">
          <img src={thumbnail} alt="" />
        </div>
        <div className="card-text">
          <div className="card-title">{title}</div>
          <p className="card-subtitle">{excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
