import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "./MovieSlice";
import { v4 as uuidv4 } from "uuid";

const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { id: uuidv4(), title, director };
    dispatch(addMovie(movie));
    navigate("/show-movies", { replace: true });
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-[40px] my-5">Add Movies</h1>
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
          <button className="border-2 border-black rounded-md mt-3 bg-red-200 hover:bg-white">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
