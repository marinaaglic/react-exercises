/* TASK
Focus an input upon a component mounting
useRef - for interaction with the actual DOM
Requirements:
- Upon page load, focus the input
*/

const FocusInput = () => (
  <div>
    <label htmlFor="focused-input">Focus me on page load!</label>
    <input name="focused-input"></input>
  </div>
);

export default FocusInput;
