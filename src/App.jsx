import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import Footer from './components/Footer'; // Import Footer
import CardList from './components/CardList'; // Import CardList
import Header from './components/Header'; // Import Header

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-100 p-6 flex flex-col">

        {/* Header Section */}
        <Header />

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
          Movie Watchlist
        </h1>

        {/* Main Content Routes */}
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Routes>

        {/* Displaying the Movie Cards */}
        <div className="mt-8">
          <CardList />
        </div>

        {/* Footer Section */}
        <Footer /> {/* Menambahkan Footer */}

      </div>
    </Router>
  );
}

export default App;
