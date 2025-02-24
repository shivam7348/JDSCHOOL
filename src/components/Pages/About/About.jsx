import React from "react";

const AboutUs = () => {
  return (
    <section className=" bg-gradient-to-b from-gray-50 to-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-1 h-6 bg-green-600 rounded-full" />
                <span className="text-green-600 uppercase tracking-wider text-sm font-semibold">
                  Discover Our Legacy
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-green-600">
                WELCOME TO J.D GLOBAL SCHOOL
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                Our school motto embodies our fundamental belief that knowledge is the gateway to enlightenment and prosperity. At J.D Global School, we nurture dreams and transform them into reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h4>
                  <p className="text-gray-600">
                    Preparing students for a rapidly changing world through critical thinking, global perspective, and strong core values.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h4>
                  <p className="text-gray-600">
                    "Every great dream begins with a dreamer." We empower students to chase their dreams with confidence and competence.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                  <p>
                    Established in 2018, under the aegis of Leading Business Houses, we've quickly emerged as one of NCR's high-potential senior secondary schools with CBSE affiliation.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                  <p>
                    Our unique "Indianness" curriculum connects traditional values with modern education, designed to create well-rounded individuals who excel both academically and ethically.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                  <p>
                    Led by experienced educators of national and international repute, we foster an environment that promotes lifelong learning and holistic development.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  Learn More
                </button>
                <button className="border-2 border-green-600 text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition duration-300 flex items-center justify-center">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-8">
              <div className="relative">
                <div className="absolute inset-0  rounded-lg transform translate-x-3 translate-y-3" />
                <img
                  src="https://jdglobalschool.in/images/slider/about.jpg"
                  alt="About JD Global School"
                  className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Quick Facts</h4>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <span className="w-4 h-4 bg-green-100 rounded-full mr-2" />
                    CBSE Affiliated
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-4 h-4 bg-green-100 rounded-full mr-2" />
                    Established 2018
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-4 h-4 bg-green-100 rounded-full mr-2" />
                    Modern Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;