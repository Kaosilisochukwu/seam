import React from "react";
import "./Atom.css";

const Button = ({ title, classname }) => {
  return <button className={`button ${classname}`}>{title}</button>;
};

export default Button;
