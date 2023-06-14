import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flight/flightSlice";

export default configureStore({
  reducer: {
    flight: flightReducer,
  },
});
