import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditMovie() {
  const { id } = useParams();  // Mengambil ID film dari URL
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [status, setStatus] = useState('Not Watched');
  const navigate = useNavigate();  // Ganti useHistory dengan useNavigate

  // Fetch data film berdasarkan ID saat halaman pertama kali dimuat
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/movies/${id}`);
        const { title, genre, releaseDate, status } = res.data;
        setTitle(title);
        setGenre(genre);
        setReleaseDate(releaseDate);
        setStatus(status);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/movies/${id}`, { title, genre, releaseDate, status });
      navigate('/');  // Ganti history.push dengan navigate
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-pink-600 font-semibold mb-6">Edit Movie</h2>
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
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600">Update Movie</button>
        </div>
      </form>
    </div>
  );
}

export default EditMovie;
