import React from "react";

const Tag = ({ value, styles, title }) => {
  return (
    <div>
      <div className="tag" style={{ ...styles }}>
        {value}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Tag;
