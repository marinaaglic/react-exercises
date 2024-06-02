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

const ColorRenderer = () => {
  return (
    <>
      <h2>COLOR RENDERER</h2>
      <p>
        Build a color renderer that will display color swatches on a user
        interface.
      </p>
      <p>
        Update the ColorRenderer component to display one instance of the Color
        component for each color in the array of colors.
      </p>
      <h2>
        {colors.map((color) => (
          <Color key={color.name} hex={color.hex} name={color.name} />
        ))}
      </h2>
      <Link to="/">Back</Link>
    </>
  );
};

export default ColorRenderer;
