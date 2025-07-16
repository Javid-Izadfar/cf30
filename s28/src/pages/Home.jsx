import { useReducer } from "react";

import { counterReducer } from "@/reducers/counter";
// import Header from '@/components/layout/Header';
// import Header from '@comps/layout/Header';

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <div>Current: {count}</div>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "remove" })}>Remove</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default Home;
