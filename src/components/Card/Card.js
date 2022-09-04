import React from "react";
import "./Card.scss";

export default function Card({ card, flipped, disabled, handleClick }) {
  const { src, matched } = card;

  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${matched ? "matched" : ""}`}
    >
      <img className="sparkle" src={"img/misc/sparkle.png"} alt="sparkle" />
      <img className="front" src={src} alt="card front" />
      <img
        className="back"
        onClick={disabled ? () => {} : () => handleClick(card)}
        src={"img/misc/pokeball.png"}
        alt="card back"
      />
    </div>
  );
}
