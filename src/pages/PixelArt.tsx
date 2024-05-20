/* TASK
Build a pixel art drawing app
React Context 
-   Allows you to share data between components more easily. 
    Instead of having to pass a prop down multiple levels, you can use Context.
Requirements:
- When a color is clicked, taht color becomes the drawing color. Then, when one of the grid
    squares is clicked, it should be colored in with the drawing color.
- Use React Context to share state between your components
*/

import { useState } from "react";
import { ColorContext } from "../context/ColorContext";
import ColorPicker from "../components/PixelArt/PixelColorPicker";
import Pixels from "../components/PixelArt/Pixels";

const PixelArt = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <ColorContext.Provider
      value={{ selectedColor, setColor: setSelectedColor }}
    >
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  );
};

export default PixelArt;
