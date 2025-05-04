import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import Footer from './components/Footer'; // Import Footer
import CardList from './components/CardList'; // Import CardList

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-100 p-6 flex flex-col">
        <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">Movie Watchlist</h1>
        
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Routes>

        {/* Menambahkan CardList sebelum Footer */}
        <CardList />

        <Footer /> {/* Menambahkan Footer */}
      </div>
    </Router>
  );
}

export default App;
