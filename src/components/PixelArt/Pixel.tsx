import { useState } from "react";
import { useColor } from "../../context/ColorContext";

const Pixel = () => {
  const [color, setColor] = useState("lightGrey");
  const { selectedColor } = useColor();

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: color,
        margin: "1px",
      }}
      onClick={() => setColor(selectedColor)}
    />
  );
};

export default Pixel;
