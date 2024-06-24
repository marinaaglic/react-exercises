import { useReducer } from "react";
import { calculatorReducer, initialState } from "../hooks/calculatorReducer";
import { Link } from "react-router-dom";

const SimpleCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <h2>SIMPLE CALCULATOR</h2>
      <p>
        Build a simple calculator useReducer - moving state management outside
        of the component
      </p>
      <ul>Requirements:</ul>
      <li>Implement the logic so that two numbers can be selected</li>
      <li>
        Implement the logic to add these two selected numbers together. Same for
        subtraction
      </li>
      <li>
        Implement a clear function which will reset botch the numbers to 0
      </li>
      <li>use UseReducer to store and modify your data</li>
      <div>
        <h2>{state.number1}</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER1", payload: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>{state.number2}</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER2", payload: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div>
        <h2>Result:</h2>
        <p>{state.result}</p>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default SimpleCalculator;
