import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-500 text-white text-center py-2 mt-auto text-sm">
      <p>
        More complete info dm via{' '}
        <a
          href="https://www.instagram.com/shakiracapturemoment?igsh=cXlxNGtqa3J1b2dy"
          target="_blank" // Membuka link di tab baru
          rel="noopener noreferrer" // Keamanan tambahan
          className="text-white font-semibold hover:text-pink-200"
        >
          @shakiracapturemoment
        </a>
      </p>
    </footer>
  );
}

export default Footer;
