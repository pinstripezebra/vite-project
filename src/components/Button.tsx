import React from "react";

interface Props {
  children: String;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const button = ({ children, color, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
