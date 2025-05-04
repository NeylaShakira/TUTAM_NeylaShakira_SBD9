import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/movies');
        setMovies(res.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      setMovies(movies.filter(movie => movie._id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center text-pink-600 font-semibold mb-4">Your Movie List</h2>
      <Link to="/add" className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 mb-6 inline-block">Add New Movie</Link>
      <ul className="space-y-4">
        {movies.map(movie => (
          <li key={movie._id} className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl text-pink-700 font-semibold">{movie.title}</h3>
              <p className="text-pink-500">{movie.genre}</p>
            </div>
            <div className="flex gap-2">
              <Link to={`/edit/${movie._id}`} className="text-pink-500 hover:text-pink-600">Edit</Link>
              <button onClick={() => handleDelete(movie._id)} className="text-red-500 hover:text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
