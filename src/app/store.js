import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../features/movies/MovieSlice";
const store = configureStore({
  reducer: {
    movieReducer: MoviesReducer,
  },
});

export default store;
