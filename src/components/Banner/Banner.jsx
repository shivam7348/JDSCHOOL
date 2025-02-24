import React from 'react';

const Banner = ({ title, image, breadcrumbItems }) => {
  return (
    <section
      className="relative h-48 md:h-56 lg:h-64 overflow-hidden"
    >
      {/* Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-center h-full">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>

          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <span className="text-gray-300 mx-2">/</span>
                  )}
                  <li
                    className={`${
                      item.active ? 'text-gray-300' : 'text-white hover:text-gray-300'
                    } transition-colors duration-200`}
                  >
                    {item.active ? (
                      <span>{item.name}</span>
                    ) : (
                      <a href={item.link}>{item.name}</a>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;