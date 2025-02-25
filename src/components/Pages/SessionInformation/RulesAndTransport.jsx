// src/components/RulesPage.jsx

import React from 'react';
import { ChevronRight, Clock, Car, Trash2, Pencil, User, BookOpen, School, Bell, Smartphone } from 'lucide-react';

const RulesPage = () => {
  const rules = [
    {
      id: 1,
      text: "All students should come to school on time, as specified by the principal from time to time. Habitual late coming may lead to asking the student to go back home without attending school.",
      icon: <Clock className="text-indigo-600" />
    },
    {
      id: 2,
      text: "Punctuality and discipline should be the watchwords of every student. Report on time and be brisk in your walk.",
      icon: <Clock className="text-indigo-600" />
    },
    {
      id: 3,
      text: "No student is allowed to drive a motorized vehicle.",
      icon: <Car className="text-indigo-600" />
    },
    {
      id: 4,
      text: "Damage done by the student to school property will have to be made good by him/her. Classrooms should be kept tidy and attractive.",
      icon: <Trash2 className="text-indigo-600" />
    },
    {
      id: 5,
      text: "Scribbling on furniture or on walls is strictly forbidden.",
      icon: <Pencil className="text-indigo-600" />
    },
    {
      id: 6,
      text: "Students should be clean and tidy in their person and dress, take pride in their personal appearance, and maintain proper body cleanliness respectful and obliging to their elders and companions.",
      icon: <User className="text-indigo-600" />
    },
    {
      id: 7,
      text: "In the classrooms, besides paying attention to cleanliness and personal bearing, they should create and maintain an atmosphere conducive to serious study.",
      icon: <BookOpen className="text-indigo-600" />
    },
    {
      id: 8,
      text: "During class time, no student may leave the school premises without the Principal's permission. Students may leave the class room only with the teacher's permission and with the permission pass.",
      icon: <School className="text-indigo-600" />
    },
    {
      id: 9,
      text: "At the end of each period, a bell is rung at which the student should either stand silently waiting for their next teacher or move quietly to the next classroom.",
      icon: <Bell className="text-indigo-600" />
    },
    {
      id: 10,
      text: "Students are not allowed to bring cell phones, cameras, i-pods, music system, video games, cds etc. to school.",
      icon: <Smartphone className="text-indigo-600" />
    }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/images/page-banner-12.jpg')" }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rules of Code And Conduct</h1>
            <nav className="flex justify-center">
              <ol className="flex items-center space-x-2">
                <li className="flex items-center">
                  <a href="/" className="hover:text-blue-200 transition">Home</a>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <span className="font-medium">Rules of Code And Conduct</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">RULES OF CODE AND CONDUCT</h2>
                <h3 className="text-xl text-gray-600 mt-2">Welcome to J.D Global School</h3>
              </div>
              
              <div className="space-y-6">
                {rules.slice(0, 7).map(rule => (
                  <div key={rule.id} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm transition hover:shadow-md">
                    <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-full">
                      {rule.icon}
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">{rule.id}.</span> {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="sticky top-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/about/fee.jpg" 
                  alt="School rules illustration" 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    We aim to create a disciplined learning environment where students can thrive academically and personally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                {rules.slice(7).map(rule => (
                  <div key={rule.id} className="flex items-start space-x-4 border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-full">
                      {rule.icon}
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">{rule.id}.</span> {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RulesPage;