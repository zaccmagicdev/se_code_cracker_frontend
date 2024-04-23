import React from "react";
import "./Circle.css";

//using a more universal method of doing this is a lot more conventional
const Circle = ({ color, size, onClick, className }) => {
  return (
    <div
      className={`circle circle_${color !== "" || "z" ? color : "grey"} ${className || ''}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    />
  );
};

export default Circle;
