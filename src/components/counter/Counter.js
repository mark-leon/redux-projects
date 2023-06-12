import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCount,
  decrement,
  increment,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../../rtk/counter/counterSlice";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5  rounded ">
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
        <input
          // className={styles.textbox}
          aria-label="Set increment amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-green-400 text-white px-3 py-2 rounded shadow"
          // onClick={() => dispatch(Number(incrementByAmount(amount)) || 0)}
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          IncrementByAmount
        </button>
        <button
          className="bg-orange-400 text-white px-3 py-2 rounded shadow"
          // onClick={() => dispatch(Number(decrementByAmount(amount)) || 0)}
          onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}
        >
          DecrementByAmount
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
