import React, { useState, useEffect } from "react";
import "./ColorPicker.css";

function ColorPicker() {

  let testArr = [];

  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {testArr.push(currentColor); console.log(testArr)}, [currentColor]);

  return (
    <div className="colorpicker">
      <button
        className="colorpicker__button colorpicker__button_red"
        onClick={() => {
          setCurrentColor("red");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_orange"
        onClick={() => {
          setCurrentColor("orange");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_yellow"
        onClick={() => {
          setCurrentColor("yellow");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_green"
        onClick={() => {
          setCurrentColor("green");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_cyan"
        onClick={() => {
          setCurrentColor("cyan");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_blue"
        onClick={() => {
          setCurrentColor("blue");
        }}
      />
      <button
        className="colorpicker__button colorpicker__button_purple"
        onClick={() => {
          setCurrentColor("purple");
        }}
      />
    </div>
  );
}

export default ColorPicker;
