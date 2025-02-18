import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slicers/counterSlice";
import { RootState } from "../redux/store"; // Adjust the path based on your project structure

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
