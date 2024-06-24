import { useState } from "react";
import { ColorContext } from "../context/ColorContext";
import ColorPicker from "../components/PixelArt/PixelColorPicker";
import Pixels from "../components/PixelArt/Pixels";
import { Link } from "react-router-dom";

const PixelArt = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div>
      <h2>PIXEL ART</h2>
      <p>Build a pixel art drawing app</p>
      <ul>React Context </ul>
      <li>Allows you to share data between components more easily. </li>
      <li>
        Instead of having to pass a prop down multiple levels, you can use
        Context.
      </li>
      <ul>Requirements:</ul>
      <li>
        When a color is clicked, taht color becomes the drawing color. Then,
        when one of the grid squares is clicked, it should be colored in with
        the drawing color.
      </li>
      <li>Use React Context to share state between your components</li>
      <ColorContext.Provider
        value={{ selectedColor, setColor: setSelectedColor }}
      >
        <ColorPicker />
        <Pixels />
      </ColorContext.Provider>
      <Link to="/">Back</Link>
    </div>
  );
};

export default PixelArt;
