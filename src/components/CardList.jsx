import React from 'react';
import image1 from '../assets/Pasarea de Smarald.jpg'; // Gambar pertama
import image2 from '../assets/twilight-i5991.jpg'; // Gambar kedua (Twilight)
import image4 from '../assets/Kuma.jpg'; // Gambar keempat (Kuma - The Other Wife)
import image5 from '../assets/yali-capkini.jpg'; // Gambar kelima (Yalı Çapkını)
import image6 from '../assets/vatanim-sensin-turkish-movie-poster.webp'; // Gambar keenam (Vatanım Sensin)

function CardList() {
  const images = [
    image1,  // Gambar pertama
    image2,  // Gambar kedua (Twilight)
    image4,  // Gambar keempat (Kuma - The Other Wife)
    image5,  // Gambar kelima (Yalı Çapkını)
    image6,  // Gambar keenam (Vatanım Sensin)
    "https://via.placeholder.com/150", // Gambar ketujuh
    "https://via.placeholder.com/150", // Gambar kedelapan
    "https://via.placeholder.com/150", // Gambar kesembilan
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={img} alt={`card-${index}`} className="w-full h-auto rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
