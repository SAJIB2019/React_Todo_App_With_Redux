import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "./MovieSlice";
import { Link } from "react-router-dom";

const MovieViews = () => {
  const movies = useSelector((state) => state.movieReducer.movies);
  console.log(movies);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl">MovieViews</h1>
      <table className="mt-10 border-2 border-red-600">
        <thead>
          <tr className="text-xl uppercase">
            {/* <th className="px-[5px] border-2 border-red-600">ID</th> */}
            <th className="px-[6px] border-2 border-red-600">Title</th>
            <th className="px-[6px] border-2 border-red-600">Author</th>
            <th className="px-[5px] border-2 border-red-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {movies &&
            movies.map((movie) => {
              const { id, title, director } = movie;
              return (
                <tr key={id} className="text-[15px] font-bold">
                  {/* <td className="px-[5px] border-2 border-red-600">{id}</td> */}
                  <td className="px-[6px] border-2 border-red-600">{title}</td>
                  <td className="px-[6px] border-2 border-red-600">
                    {director}
                  </td>
                  <td className="px-[5px] border-2 border-red-600">
                    <Link to="/edit-movies" state={{ id, title, director }}>
                      <button className="px-3 m-1 border-2 border-green-400 rounded-md bg-green-400">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                      className="px-3 m-1 border-2 border-red-600 rounded-md bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieViews;
