import React from "react";
import "./Atom.css";

const Button = ({ title, btnClass }) => {
  return <button className={`button ${btnClass}`}>{title}</button>;
};

export default Button;
