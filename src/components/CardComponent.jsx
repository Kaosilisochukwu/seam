import React from "react";
import './Components.css'

const CardComponent = ({ title, children }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <div className="tag-container">{children}</div>
    </div>
  );
};

export default CardComponent;
