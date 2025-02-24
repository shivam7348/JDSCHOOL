import React from 'react';
import schoolTiming from "../SessionInformation/schooltiming.png";
import { Link } from 'react-router-dom';

const Timing = () => {
    return (
        <>
            {/* Banner Section */}
            <section 
                id="page-banner" 
                className="relative pt-28 pb-44 flex items-center justify-center text-center bg-black bg-opacity-50"
                style={{ 
                    backgroundImage: `url(${schoolTiming})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold text-white drop-shadow-lg">Timing</h2>
                    <nav aria-label="breadcrumb" className="mt-4">
                        <ol className="breadcrumb flex justify-center space-x-2 text-white">
                            <li className="breadcrumb-item">
                                <Link to="/" className="hover:text-gray-300">Home</Link>
                            </li>
                            <li className="breadcrumb-item active text-gray-300" aria-current="page">School Timing</li>
                        </ol>
                    </nav>
                </div>
            </section>
            
            {/* Timing Details Section */}
            <section id="school-timing" className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800">School Timing</h3>
                        <h5 className="mt-2 text-2xl text-gray-600">Welcome to J.D Global School</h5>
                        <div className="mt-6">
                            <h4 className="text-2xl font-semibold text-gray-800">NURSERY TO UKG</h4>
                            <p className="text-lg text-gray-700">Summer: <span className="font-medium">7:35 AM - 12:30 PM</span></p>
                            <p className="text-lg text-gray-700">Winter: <span className="font-medium">8:30 AM - 1:00 PM</span></p>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-2xl font-semibold text-gray-800">CLASS I - XII</h4>
                            <p className="text-lg text-gray-700">Summer: <span className="font-medium">7:30 AM - 1:30 PM</span></p>
                            <p className="text-lg text-gray-700">Winter: <span className="font-medium">8:00 AM - 2:00 PM</span></p>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img 
                            src="https://jdglobalschool.in/images/about/time.jpg" 
                            alt="School Timing" 
                            className="w-full max-w-lg rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timing;
