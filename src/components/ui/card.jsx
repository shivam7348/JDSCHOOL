// src/components/ui/card.jsx
import React from "react";

const Card = ({ className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }) => {
  return <div className={`p-6 ${className}`} {...props} />;
};

const CardTitle = ({ className, ...props }) => {
  return (
    <h3
      className={`text-xl font-semibold text-gray-900 ${className}`}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }) => {
  return (
    <p className={`mt-2 text-sm text-gray-500 ${className}`} {...props} />
  );
};

const CardContent = ({ className, ...props }) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
};

const CardFooter = ({ className, ...props }) => {
  return (
    <div
      className={`px-6 py-4 bg-gray-50 border-t border-gray-100 ${className}`}
      {...props}
    />
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };