import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [status, setStatus] = useState('Not Watched');
  const navigate = useNavigate(); // Ganti useHistory dengan useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/movies', { title, genre, releaseDate, status });
      navigate('/'); // Ganti history.push dengan navigate
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-pink-600 font-semibold mb-6">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="Not Watched">Not Watched</option>
            <option value="Watched">Watched</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600">Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
