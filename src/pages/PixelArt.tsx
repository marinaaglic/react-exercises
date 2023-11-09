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

const ColorPicker = () => {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button key={color} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

const Pixel = () => {
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: "lightGrey",
        margin: "1px",
      }}
    />
  );
};

const Pixels = () => {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
};

const PixelArt = () => {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  );
};

export default PixelArt;
