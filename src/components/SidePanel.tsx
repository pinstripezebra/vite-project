import React, { useState } from "react";
import { MouseEvent } from "react";

const SidePanel = () => {
  let items = [
    "Bio",
    "Commodities-Conflict",
    "Aircraft Delay Prediction",
    "Heart Failure Prediction",
    "Resume",
  ];

  let link_list = ["Github", "LinkedIn", "Medium"];

  //Statehook for clicking
  const [selectIndex, setSelectedIndex] = useState(-1);
  const [selectIndexLink, setSelectedIndexLink] = useState(-1);

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
        <h1>Links</h1>
        <ul className="list-group" style={{ justifyContent: "left" }}>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/pinstripezebra";
            }}
          >
            {" "}
            github
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/lucas-see-6b439188/";
            }}
          >
            {" "}
            LinkedIn
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://medium.com/@seelcs12";
            }}
          >
            {" "}
            Medium
          </button>
        </ul>
      </ul>
    </>
  );
};

export default SidePanel;
