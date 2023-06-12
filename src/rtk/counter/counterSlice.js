// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     reset: (state) => {
//       state.value = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      const counter = {
        id: Math.random() * 100,
      };
      state.counter.push(counter);
    },
    removeCounter: (state, action) => {
      state.counter = state.counter.filter(
        (counter) => counter.id !== action.payload
      );
    },
  },
});

export const { addCounter, removeCounter } = counterSlice.actions;

export default counterSlice.reducer;
