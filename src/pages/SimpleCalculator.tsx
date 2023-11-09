/* TASK
Build a simple calculator
useReducer - moving state management outside of the component
Requirements:
- Implement the logic so that two numbers can be selected
- Implement the logic to add these two selected numbers together. Same for subtraction
- Implement a clear function which will reset botch the numbers to 0
- use UseReducer to store and modify your data
*/

const initialState = {};

const reducer = (state, action) => {};

const SimpleCalculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button key={number}>{number}</button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button key={number}>{number}</button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button>+</button>
        <button>-</button>
        <button>c</button>
      </div>
      <div>
        <h2>Result:</h2>
      </div>
    </div>
  );
};

export default SimpleCalculator;
