import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnnualPlanner = () => {
  const [plannerImages, setPlannerImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    fetchPlannerImages();
  }, []);

  const fetchPlannerImages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/annualplanner/get`
      );
      setPlannerImages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching planner images:", error);
      setError("Failed to load annual planner.");
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg animate-pulse">Loading annual planner...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Academic Planner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic calendar and important dates for the year {currentYear}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plannerImages.map((planner) => (
            <div
              key={planner._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(planner)}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={planner.image.url}
                  alt={`Academic Planner ${planner.image.fileName}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {planner.image.fileName.split('-').join(' ').split('.')[0]}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Click to view full schedule
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="max-w-6xl w-full p-4">
              <div className="relative">
                <img
                  src={selectedImage.image.url}
                  alt={selectedImage.image.fileName}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeModal}
                >
                  <svg 
                    className="w-6 h-6 text-gray-800" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                
                {/* Download button */}
                <a 
                  href={selectedImage.image.url}
                  download
                  className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnnualPlanner;