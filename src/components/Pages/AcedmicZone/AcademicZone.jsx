import React from "react";
import Activities from "./Activities";
import AnnualPlanner from "./AnnualPlanner";

function AcademicZone() {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Academic Zone</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to the Academic Zone! Plan your academic year, explore activities, and stay ahead with our well-structured resources.
        </p>
        <div className="space-y-6">
          <AnnualPlanner />
          <Activities />
        </div>
      </div>
    </div>
  );
}

export default AcademicZone;
