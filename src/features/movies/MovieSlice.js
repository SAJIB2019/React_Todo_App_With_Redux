const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");
const initialMovies = {
  movies: [
    { id: uuidv4(), title: "Robert Walker", director: "Alfred Hitchcock" },
    { id: uuidv4(), title: "Stagecoach", director: "John Ford" },
  ],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialMovies,
  reducers: {
    showMovies: (state) => state,
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    updateMovie: (state, action) => {
      const { id, title, director } = action.payload;
      const isMovieExist = state.movies.filter((movie) => movie.id == id);
      if (isMovieExist) {
        isMovieExist[0].title = title;
        isMovieExist[0].director = director;
      }
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
  },
});

export const { showMovies, addMovie, deleteMovie, updateMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
