import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, removeMatch } from "../../rtk/match/matchSlice";

export const Match = ({ id, count }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  return (
    <div class="all-matches container">
      <div class="match">
        <div class="wrapper">
          <button
            class="lws-delete"
            onClick={() => dispatch(removeMatch({ count, id }))}
          >
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match {id}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm">
            <h4>Increment</h4>
            <input
              type="number"
              name="increment"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  dispatch(increment({ value, id }));
                }
              }}
              class="lws-increment"
            />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input
              type="number"
              name="decrement"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  dispatch(decrement({ value, id }));
                }
              }}
              class="lws-decrement"
            />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult">{count}</h2>
        </div>
      </div>
    </div>
  );
};
