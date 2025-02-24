import React from "react";

const ApplicationSection = () => {
  return (
    <section id="apply-aprt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto px-4">
        <div className="apply">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Apply for Fall */}
            <div className="w-full md:w-1/2">
              <div className="apply-cont bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🎓</span> Apply for Fall
                </h3>
                <p className="text-lg mb-6">
                  Whether you’re coming straight out of high school, already
                  enrolled at another university, or going back to college, we’ll
                  walk you through the process of becoming a Panther.
                </p>
                <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
            
            {/* Apply for Scholarship */}
            <div className="w-full md:w-1/2">
              <div className="apply-cont bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🏅</span> Apply for Scholarship
                </h3>
                <p className="text-lg mb-6">
                  Scholarships are awarded based upon various criteria, such as
                  academic merit, diversity and inclusion, athletic skill, and
                  financial need, among others.
                </p>
                <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded-lg hover:bg-green-50 transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;