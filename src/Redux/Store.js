import { createStore } from "redux";

const initalCount ={count: 0};
const renderCount = (state = initalCount, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(renderCount);
export default store;
