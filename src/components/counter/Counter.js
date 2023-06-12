import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/counter/action";

export const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementHandler}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-400 text-white px-3 py-2 rounded shadow"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
