import React from 'react';

function Header() {
  return (
    <header className="bg-pink-200 text-white p-4 flex justify-between items-center rounded-lg shadow-md">
      {/* Nama di sebelah kiri */}
      <div className="text-xl font-bold text-pink-700">
        ᴺᵉʸˡᵃ ˢʰᵃᵏⁱʳᵃ
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search Movies..."
          className="w-full p-2 rounded-md bg-pink-50 text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Notification Icon on the Right */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="p-2 bg-pink-300 rounded-md">
            <span role="img" aria-label="bell">🔔</span>
          </button>
          <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
