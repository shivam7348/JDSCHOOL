import React, { useState } from 'react';
import smartclassroom from "../InfraStructure/img/smartclassroom.png"

const SmartClassroomComponent = () => {
  const [activeFeature, setActiveFeature] = useState('interactive');
  
  const features = {
    interactive: {
      title: "Interactive Displays",
      description: "Touch-enabled smart boards and displays that facilitate collaborative learning and interactive lessons.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    digital: {
      title: "Digital Learning Tools",
      description: "Access to educational applications, e-books, and digital resources that enhance the learning experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    connectivity: {
      title: "Wireless Connectivity",
      description: "High-speed internet and wireless projection systems that allow seamless sharing of content.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    automated: {
      title: "Automated Systems",
      description: "Smart lighting, climate control, and attendance systems that create an optimal learning environment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header Image */}
      <div className="relative h-64">
        <img 
          src={smartclassroom} 
          alt="Smart Classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h2 className="text-2xl font-bold">Smart Classroom Technology</h2>
            <p className="text-sm">Transforming education through innovative technology</p>
          </div>
        </div>
      </div>

      {/* Feature Navigation */}
      <div className="flex overflow-x-auto bg-gray-100 border-b">
        {Object.keys(features).map((key) => (
          <button
            key={key}
            onClick={() => setActiveFeature(key)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeFeature === key
                ? 'bg-white border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {features[key].title}
          </button>
        ))}
      </div>

      {/* Feature Content */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
            {features[activeFeature].icon}
          </div>
          <div className="md:w-3/4 md:pl-4">
            <h3 className="text-xl font-semibold text-gray-800">{features[activeFeature].title}</h3>
            <p className="mt-2 text-gray-600">{features[activeFeature].description}</p>
            
            {activeFeature === 'interactive' && (
              <div className="mt-3 bg-blue-50 p-3 rounded-md text-sm text-blue-800">
                Our interactive displays support multi-touch gestures, digital annotation, and screen sharing from student devices.
              </div>
            )}
            
            {activeFeature === 'digital' && (
              <div className="mt-3 bg-green-50 p-3 rounded-md text-sm text-green-800">
                Students have access to a digital library with over 5,000 educational resources and personalized learning platforms.
              </div>
            )}
            
            {activeFeature === 'connectivity' && (
              <div className="mt-3 bg-purple-50 p-3 rounded-md text-sm text-purple-800">
                Our high-speed network supports simultaneous connections from all student devices with dedicated bandwidth for educational applications.
              </div>
            )}
            
            {activeFeature === 'automated' && (
              <div className="mt-3 bg-yellow-50 p-3 rounded-md text-sm text-yellow-800">
                Smart sensors adjust lighting and temperature based on occupancy and time of day, creating an optimal learning environment.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t">
        <div className="p-3 text-center border-r">
          <p className="text-2xl font-bold text-blue-600">100%</p>
          <p className="text-xs text-gray-500">Digital Coverage</p>
        </div>
        <div className="p-3 text-center border-r">
          <p className="text-2xl font-bold text-green-600">30+</p>
          <p className="text-xs text-gray-500">Learning Apps</p>
        </div>
        <div className="p-3 text-center border-r">
          <p className="text-2xl font-bold text-purple-600">1 Gbps</p>
          <p className="text-xs text-gray-500">Internet Speed</p>
        </div>
        <div className="p-3 text-center">
          <p className="text-2xl font-bold text-yellow-600">24/7</p>
          <p className="text-xs text-gray-500">Tech Support</p>
        </div>
      </div>
    </div>
  );
};

export default SmartClassroomComponent;