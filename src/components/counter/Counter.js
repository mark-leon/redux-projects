import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  selectCount,
} from "../../rtk/counter/counterSlice";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5  bg-white rounded shadow ">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
