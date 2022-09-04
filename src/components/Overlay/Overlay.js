import React from "react";
import Button from "../Button/Button";
import "./Overlay.scss";

export default function Overlay({ newGame, backToMainMenu }) {
  return (
    <div className="overlay">
      <div>
        <img src="img/misc/won.png" alt="You won!" />
        <div>
          <Button width={250} height={60} onClick={newGame}>
            New game
          </Button>
          <Button width={250} height={60} onClick={backToMainMenu}>
            Back to Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
