import React from "react";

import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="card-body">
        <div className="card-image">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <div className="card-text">
          <div className="card-title">Lorem Ipsum</div>
          <p className="card-subtitle">
            Ad ipsum cillum aute labore id enim dolor. Laboris enim nostrud non
            aliquip nostrud et esse dolore excepteur non. Nostrud magna sint
            quis proident officia ut consectetur et nulla. Dolor commodo do aute
            eu. Mollit excepteur tempor laborum quis amet Lorem nisi et
            consectetur velit elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
