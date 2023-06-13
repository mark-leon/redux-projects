import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nCounter: [{ id: 1, count: 0 }],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      const counter = {
        id: Math.random() * 100,
        count: 0,
      };
      state.nCounter.push(counter);
    },
    incrementCounter: (state, action) => {
      const counter = state.nCounter.find(
        (counter) => counter.id === action.payload.id
      );
      if (counter) {
        counter.count = counter.count + 1;
      }
    },
    decrementCounter: (state, action) => {
      const counter = state.nCounter.find(
        (counter) => counter.id === action.payload.id
      );
      if (counter) {
        counter.count = counter.count - 1;
      }
    },
    resetCounter: (state, action) => {
      const counter = state.nCounter.find(
        (counter) => counter.id === action.payload.id
      );
      if (counter) {
        counter.count = 0;
      }
    },
    removeCounter: (state, action) => {
      state.nCounter = state.nCounter.filter(
        (counter) => counter.id !== action.payload.id
      );
    },
  },
});

export const {
  addCounter,
  removeCounter,
  incrementCounter,
  resetCounter,
  decrementCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
