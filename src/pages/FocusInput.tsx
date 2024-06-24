import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      <ul>Requirements:</ul>
      <li>Upon page load, focus the input</li>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input name="focused-input" ref={inputRef}></input>
      <Link to="/">Back</Link>
    </div>
  );
};

export default FocusInput;
