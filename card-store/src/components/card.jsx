import React from "react";
import './card.css'

function Card({cardName, image}) {
  return (
    <div class="card">
      <div className="c-box">
      <img
        src={image}
        alt="AirMax Pro"
        className=""
      />
        <h1 className="">{cardName}</h1>
        <p className="">
          This is card : description
        </p>
      </div>
    </div>
  )
}

export default Card