import { useState } from "react";
import Header from "../layout/header";
import { useEffect } from "react";
import { useMemo } from "react";

const Board = ({ number }) => {
  useEffect(() => {
    console.log("Board component did Mount");
    const timeout = setTimeout(() => {
      console.log("inside setTimeout");
    }, 5000);

    return () => {
      clearTimeout(timeout);
      console.log("Board component did UnMount");
    };
  }, []);

  const power = useMemo(() => {
    return Math.pow(2, number);
  }, [number]);

  return (
    <div>
      2 to the power of {number} = {power}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {!!count && <Board number={count} />}
    </>
  );
};
const CounterApp = () => {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
};

export default CounterApp;
