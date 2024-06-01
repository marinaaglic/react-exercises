type State = {
  number1: number;
  number2: number;
  result: number;
};

type Action =
  | { type: "SET_NUMBER1"; payload: number }
  | { type: "SET_NUMBER2"; payload: number }
  | { type: "ADD" }
  | { type: "SUBTRACT" }
  | { type: "CLEAR" };

export const initialState: State = {
  number1: 0,
  number2: 0,
  result: 0,
};

export function calculatorReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload };
    case "SET_NUMBER2":
      return { ...state, number2: action.payload };
    case "ADD":
      return { ...state, result: state.number1 + state.number2 };
      return state;
    case "SUBTRACT":
      return { ...state, result: state.number1 - state.number2 };
    case "CLEAR":
      return { ...initialState };
    default:
      return state;
  }
}
