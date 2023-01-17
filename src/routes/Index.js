import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import MovieViews from "../features/movies/MovieViews";
import AddMovies from "../features/movies/AddMovies";
import EditMovies from "../features/movies/EditMovies";
import Footer from "../layouts/Footer.jsx";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="bg-green-200 h-screen w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-movies" element={<MovieViews />} />
          <Route path="/add-movies" element={<AddMovies />} />
          <Route path="/edit-movies" element={<EditMovies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
