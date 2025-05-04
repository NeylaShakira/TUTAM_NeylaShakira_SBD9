import React from 'react';
import image1 from '../assets/Pasarea de Smarald.jpg'; // First image
import image4 from '../assets/Kuma.jpg'; // Fourth image (Kuma - The Other Wife)
import image5 from '../assets/yali-capkini.jpg'; // Fifth image (Yalı Çapkını)
import image6 from '../assets/vatanim-sensin-turkish-movie-poster.webp'; // Sixth image (Vatanım Sensin)
import image7 from '../assets/hercai.jpg'; // Seventh image (Hercai)
import image9 from '../assets/Cukur.jpg'; // New image (Çukur)
import image10 from '../assets/Medcezir_Serie_de.jpg'; // New image (Med Cezir)
import image11 from '../assets/afili ask.jpg'; // New image (Afili Aşk)

function CardList() {
  const images = [
    { img: image1, title: "Pasarea de Smarald" },
    { img: image4, title: "Kuma - The Other Wife" },
    { img: image5, title: "Yalı Çapkını" },
    { img: image6, title: "Vatanım Sensin" },
    { img: image7, title: "Hercai" },
    { img: image9, title: "Çukur" },
    { img: image10, title: "Med Cezir" },
    { img: image11, title: "Afili Aşk" },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <img
              src={item.img}
              alt={`card-${index}`}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-pink-600">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
