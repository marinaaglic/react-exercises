import React from "react";
import { useColor } from "../../context/ColorContext";

const ColorPicker: React.FC = () => {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = useColor();

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
