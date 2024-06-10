/* TASK
Focus an input upon a component mounting
useRef - for interaction with the actual DOM
Requirements:
- Upon page load, focus the input
*/

import { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <h2>FOCUS INPUT</h2>
      <p>
        Focus an input upon a component mounting useRef - for interaction with
        the actual DOM
      </p>
      <p>Requirements:</p>
      <p>Upon page load, focus the input</p>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input name="focused-input" ref={inputRef}></input>
    </div>
  );
};

export default FocusInput;
