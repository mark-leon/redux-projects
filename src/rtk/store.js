import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./match/matchSlice";

export default configureStore({
  reducer: {
    matches: matchReducer,
  },
});
