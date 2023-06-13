import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  removeCounter,
  resetCounter,
} from "../../rtk/counter/counterSlice";

export const Counter = ({ id, count }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5  bg-white rounded shadow ">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(incrementCounter({ count, id }))}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(decrementCounter({ count, id }))}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(resetCounter({ count, id }))}
        >
          Reset
        </button>
        <button
          className="bg-pink-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(removeCounter({ count, id }))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
