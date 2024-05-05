import Color from "../components/Color";

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
    <h2>
      {colors.map((color) => (
        <Color key={color.name} hex={color.hex} name={color.name} />
      ))}
    </h2>
  );
};

export default ColorRenderer;
