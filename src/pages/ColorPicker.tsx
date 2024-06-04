import { useState } from "react";
import Color from "../components/Color";
import { Link } from "react-router-dom";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorPicker() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleClick(hex: string) {
    setBackgroundColor(hex);
  }
  return (
    <div className="page" style={{ backgroundColor }}>
      <h2>COLOR PICKER</h2>
      <p>
        Create a color picking app so the user can select the page's background
        color Requirements:
      </p>
      <p>
        Upon clicking a color, change the whole page's background to be that
        color.
      </p>
      <p>Make sure to use the Color subcomponent.</p>
      {colors.map((color) => (
        <Color
          key={color.hex}
          hex={color.hex}
          name={color.name}
          onClick={() => handleClick(color.hex)}
        />
      ))}
      <Link to="/">Back</Link>
    </div>
  );
}
