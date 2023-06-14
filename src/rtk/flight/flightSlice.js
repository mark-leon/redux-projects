import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
};
export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      const flight = {
        id: Math.floor(Math.random() * 100),
        destinationFrom: action.payload.destinationFrom,
        destinationTo: action.payload.destinationTo,
        date: action.payload.date,
        guest: action.payload.guest,
        flightClass: action.payload.flightClass,
      };
      state.flights.push(flight);
    },
    removeFlight: (state, action) => {
      state.flights = state.flights.filter(
        (flight) => flight.id !== action.payload
      );
    },
  },
});

export const { addFlight, removeFlight } = flightSlice.actions;

export default flightSlice.reducer;
