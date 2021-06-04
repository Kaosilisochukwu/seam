import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";


const Option = () => {
  const [show, setShow] = useState(false);
const handleOptionClick = () => {
  setShow(true);
};
const handleLeave = () => {
  setShow(false);
};
  return (
    <div
      className="activate"
      onMouseOver={handleOptionClick}
      onMouseLeave={handleLeave}
    >
      <p className={show ? "show" : "hide"}>Deactivate</p>
      <BiDotsVerticalRounded color="#D3D3D3" />
    </div>
  );
};

export default Option;
