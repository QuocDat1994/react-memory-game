import React from "react";
import "./Button.scss";

export default function Button({ onClick, children, width, height }) {
  return (
    <button
      onClick={onClick}
      style={{ width: width + "px", height: height + "px" }}
    >
      {children}
    </button>
  );
}
