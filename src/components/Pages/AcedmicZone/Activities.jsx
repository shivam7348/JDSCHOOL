import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/activity/get`
      );
      setActivities(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching activities:", error);
      setError("Failed to load activities.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg animate-pulse">Loading activities...</div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of activities and events that make our community vibrant and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity._id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={activity.image.url}
                  alt={activity.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {activity.description}
                </p>
                
                <button 
                  onClick={() => setSelectedActivity(
                    selectedActivity === activity ? null : activity
                  )}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {selectedActivity === activity ? 'Read Less' : 'Read More'}
                </button>
                
                {selectedActivity === activity && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;