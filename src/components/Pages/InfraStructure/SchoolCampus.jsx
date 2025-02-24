import React, { useState } from 'react';
import infra1 from "../InfraStructure/img/infra1.jpg"
import SCHOOLLIBRARY from "../InfraStructure/img/SCHOOLLIBRARY.png" 
import StudentCenter from "../InfraStructure/img/StudentCenter.png"
import sport from "../InfraStructure/img/sport.png"

const SchoolCampusShowcase = () => {
  // Campus areas with their details and images
  const campusAreas = [
    {
      id: 1,
      name: "Academic Buildings",
      description: "Modern classrooms and lecture halls equipped with the latest technology for interactive learning experiences.",
      image: infra1,
      features: ["Smart classrooms", "Computer labs", "Study areas", "Faculty offices"]
    },
    {
      id: 2,
      name: "Library & Research Center",
      description: "A comprehensive library with extensive print and digital resources, quiet study spaces, and research facilities.",
      image: SCHOOLLIBRARY,
      features: ["Digital archives", "Study rooms", "Research databases", "Reading lounges"]
    },
    {
      id: 3,
      name: "Student Center",
      description: "The heart of campus life where students can socialize, join clubs, and participate in various activities.",
      image: StudentCenter,
      features: ["Dining hall", "Student clubs", "Recreation areas", "Event spaces"]
    },
    {
      id: 4,
      name: "Sports Facilities",
      description: "State-of-the-art athletic facilities including gymnasiums, fields, courts, and training centers.",
      image: sport,
      features: ["Indoor gymnasium", "Swimming pool", "Sports fields", "Fitness center"]
    },
   
   
  ];

  const [activeTab, setActiveTab] = useState(campusAreas[0].id);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">Our Campus</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our world-class facilities designed to provide an exceptional learning 
            environment and vibrant student experience.
          </p>
          <button 
            onClick={() => setShowVirtualTour(!showVirtualTour)}
            className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            {showVirtualTour ? "Exit Virtual Tour" : "Start Virtual Tour"}
          </button>
        </div>

        {/* Virtual Tour Section */}
        {showVirtualTour ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
              <div className="w-full h-64 flex items-center justify-center">
                <p className="text-lg text-gray-600">Virtual tour simulation would load here</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                {campusAreas.map((area) => (
                  <button 
                    key={area.id}
                    onClick={() => setActiveTab(area.id)} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTab === area.id ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Campus Areas Tabs */
          <div className="mb-8">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-4">
              {campusAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={`px-4 py-2 whitespace-nowrap rounded-md font-medium transition-colors ${
                    activeTab === area.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Campus Area Content */}
        {campusAreas.map((area) => (
          activeTab === area.id && (
            <div key={area.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={area.image} 
                    alt={area.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-bold text-gray-800">{area.name}</h2>
                  <p className="mt-3 text-gray-600">{area.description}</p>
                  
                  <h3 className="mt-6 font-semibold text-lg text-gray-800">Features:</h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {area.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}

        {/* Campus Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">School Buses</h2>
          <div className="bg-gray-100 h-64 flex items-center justify-center rounded-md">
          <img src="https://busesandvans.tatamotors.com/assets/buses/files/2024-03/tata-skool-buses%20%281%29.jpg?VersionId=DOQZhv6vo6qEwl7.jjhG5qeHsFARrWO6" alt=""/>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <h3 className="font-medium text-blue-800">Getting Around</h3>
              <p className="text-sm text-gray-600 mt-1">Information about campus transportation</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <h3 className="font-medium text-green-800">Sustainability</h3>
              <p className="text-sm text-gray-600 mt-1">Our eco-friendly campus initiatives</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-md">
              <h3 className="font-medium text-purple-800">Accessibility</h3>
              <p className="text-sm text-gray-600 mt-1">Accessible routes and facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCampusShowcase;