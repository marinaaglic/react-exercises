/* TASK
Build a simple calculator
useReducer - moving state management outside of the component
Requirements:
- Implement the logic so that two numbers can be selected
- Implement the logic to add these two selected numbers together. Same for subtraction
- Implement a clear function which will reset botch the numbers to 0
- use UseReducer to store and modify your data
*/

import { useReducer } from "react";
import { calculatorReducer, initialState } from "../hooks/calculatorReducer";

const SimpleCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
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
    </div>
  );
};

export default SimpleCalculator;
