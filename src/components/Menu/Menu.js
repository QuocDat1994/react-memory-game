import React from "react";
import Button from "../Button/Button";
import "./Menu.scss";

export default function Menu({ onClick }) {
  return (
    <div className="menu">
      <div className="description">
        <img src="img/Bulbasaur.png" alt="Bulbasaur" />
        <img src="img/Charmander.png" alt="Bulbasaur" />
        <img src="img/Squirtle.png" alt="Squirtle" />
        <p>Select a difficulty to start!</p>
      </div>

      <Button onClick={() => onClick("easy")}>
        <div>Easy</div>
        <div>(4x3)</div>
      </Button>
      <Button onClick={() => onClick("medium")}>
        <div>Medium</div>
        <div>(5x4)</div>
      </Button>
      <Button onClick={() => onClick("hard")}>
        <div>Hard</div>
        <div>(8x4)</div>
      </Button>
    </div>
  );
}
