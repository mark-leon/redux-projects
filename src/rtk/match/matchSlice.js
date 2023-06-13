import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nMatch: [{ id: 1, count: 0 }],
};

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    addMatch: (state) => {
      const match = {
        id: state.nMatch.length + 1,
        count: 0,
      };
      state.nMatch.push(match);
    },
    increment: (state, action) => {
      const match = state.nMatch.find(
        (match) => match.id === action.payload.id
      );
      if (match) {
        match.count = match.count + action.payload.incrementValue;
      }
    },
    decrement: (state, action) => {
      console.log(typeof action.payload.decrementValue);
      const match = state.nMatch.find(
        (match) => match.id === action.payload.id
      );
      if (match) {
        match.count = match.count - action.payload.decrementValue;
      }
    },
    resetMatch: (state, action) => {
      state.nMatch = state.nMatch.map((match) => (match.count = 0));
    },
    removeMatch: (state, action) => {
      state.nMatch = state.nMatch.filter(
        (match) => match.id !== action.payload.id
      );
    },
  },
});

export const { addMatch, removeMatch, increment, resetMatch, decrement } =
  matchSlice.actions;

export default matchSlice.reducer;
