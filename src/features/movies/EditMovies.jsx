import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateMovie } from "./MovieSlice";

const EditMovies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [director, setDirector] = useState(location.state.director);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id, title, director }));
    navigate("/show-movies", { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="py-10 font-bold text-3xl">EditMovies</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <div className="pb-4">
            <label htmlFor="title" className="px-5">
              Title :
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="director" className="px-2">
              Director :
            </label>
            <input
              type="text"
              id="director"
              name="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              required
            />
          </div>
          <button className="border-2 border-black rounded-md mt-3 bg-red-200 hover:bg-white font-bold">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMovies;
