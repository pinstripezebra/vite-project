import React, { useState } from "react";
import { MouseEvent } from "react";

const SidePanel = () => {
  let items = [
    "Commodities-Conflict",
    "Aircraft Delay Prediction",
    "Resume",
    "Github",
    "LinkedIn",
  ];

  //Statehook for clicking
  const [selectIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidePanel;
