import { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

// export default Dropdown;

const Dropdown = ({ data }) => {
  const arrow = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState("0");
  const [option, setOption] = useState(data[0]);
  const [background, setBackground] = useState(false);

  const handleOptionChange = (value) => {
    console.log(value);
    setOption(value);
    dropDown();
  };
  const dropDown = (e) => {
    const rotateVal = rotate === "0" ? "180deg" : "0";
    arrow.current.style.transform = (() => `rotate(${rotateVal})`)();
    arrow.current.style.transition = "transform 0.5s";
    setBackground(!background);
    setRotate(rotateVal);
    setToggle(!toggle);
  };

  return (
    <div className="select-container">
      <div className="text-field" onClick={dropDown}>
        <p className="select">
          {option}
          <span
            style={{ width: 20, height: 20, display: "inline-block" }}
            ref={arrow}
            id="item"
          >
            <FaCaretDown size={20} color="black" />
          </span>
        </p>
        {toggle && (
          <div className="select-dropdown">
            {data &&
              data.map((item, i) => (
                <p
                  className="select-dropdown-text"
                  key={i}
                  onClick={handleOptionChange.bind(this, item)}
                >
                  {item}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
