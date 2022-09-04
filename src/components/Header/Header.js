import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <img className="logo" src="img/misc/logo.png" alt="logo" />
      <h1 className="slogan">Gotta match 'em all!</h1>
    </header>
  );
}
