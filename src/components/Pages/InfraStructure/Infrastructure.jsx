import React, { useState } from 'react';
import infra1 from "../InfraStructure/img/infra1.jpg"

const InfrastructureGallery = () => {
  // Sample infrastructure images - replace with your actual images

  const images = [
    { id: 1, src: infra1, alt: "Bridge infrastructure", title: "Modern Bridge" },
    { id: 2, src: "/api/placeholder/600/400", alt: "Highway system", title: "Highway Network" },
    { id: 3, src: "/api/placeholder/600/400", alt: "Dam construction", title: "Hydroelectric Dam" },
    { id: 4, src: "/api/placeholder/600/400", alt: "Railway system", title: "Railway System" },
    { id: 5, src: "/api/placeholder/600/400", alt: "Airport terminal", title: "International Airport" },
    { id: 6, src: "/api/placeholder/600/400", alt: "Power plant", title: "Power Generation Facility" },
  ];

  const [activeImage, setActiveImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Infrastructure Showcase</h2>
      
      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{image.title}</h3>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Modal for enlarged view */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="w-full object-contain max-h-screen"
            />
            <div className="bg-white p-4">
              <h3 className="text-xl font-bold">{activeImage.title}</h3>
              <p className="mt-2 text-gray-600">High-quality infrastructure showcasing modern engineering excellence.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfrastructureGallery;