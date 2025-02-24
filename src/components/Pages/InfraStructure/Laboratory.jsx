import React, { useState } from 'react';

const LaboratoryComponent = () => {
  const labTypes = [
    {
      id: 1,
      name: "Chemistry Lab",
      equipment: ["Beakers", "Bunsen burners", "Microscopes", "Safety gear"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Physics Lab",
      equipment: ["Circuit boards", "Pendulums", "Optics equipment", "Measurement tools"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Biology Lab",
      equipment: ["Microscopes", "Specimen slides", "Dissection kits", "Incubators"],
      image: "/api/placeholder/400/300"
    }
  ];

  const [selectedLab, setSelectedLab] = useState(labTypes[0]);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">School Laboratories</h2>
      
      {/* Lab Type Selection */}
      <div className="flex justify-center mb-4">
        {labTypes.map(lab => (
          <button
            key={lab.id}
            onClick={() => setSelectedLab(lab)}
            className={`px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
              selectedLab.id === lab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {lab.name}
          </button>
        ))}
      </div>
      
      {/* Selected Lab Content */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={selectedLab.image}
            alt={`${selectedLab.name} facility`}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-800">{selectedLab.name}</h3>
          <p className="text-gray-600 text-sm mt-2">
            Our {selectedLab.name.toLowerCase()} provides students with hands-on experience 
            using industry-standard equipment in a safe, supervised environment.
          </p>
          
          <h4 className="font-medium text-gray-800 mt-3">Equipment:</h4>
          <ul className="grid grid-cols-2 gap-1 mt-1">
            {selectedLab.equipment.map((item, index) => (
              <li key={index} className="flex items-center text-sm">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="mt-4">
            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
      
      {/* Safety Notice */}
      <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200 text-sm">
        <p className="font-medium text-yellow-800">Safety First</p>
        <p className="text-yellow-700 text-xs mt-1">
          All students must follow laboratory safety protocols and wear appropriate 
          safety equipment when conducting experiments.
        </p>
      </div>
    </div>
  );
};

export default LaboratoryComponent;