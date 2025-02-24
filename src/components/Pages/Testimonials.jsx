import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "/api/placeholder/100/100",
    quote: "Let us remember: One book, one pen, one child and one teacher can change the world.",
    name: "Rohit Sharma",
    designation: "Bsc, Engineering",
  },
  {
    img: "/api/placeholder/100/100",
    quote: "It's one of my favorite seasons of the year: Back to School. As a kid, I loved fresh school supplies, new outfits, the change of seasons, and the chance to crack open a new textbook.",
    name: "Sanjana Shegal",
    designation: "Bsc, Engineering",
  },
  {
    img: "/api/placeholder/100/100",
    quote: "This is a new year. A new beginning. And things will change.",
    name: "Sachin Sharma",
    designation: "Bsc, Engineering",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="relative py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/api/placeholder/1920/600)" }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      <div className="container max-w-6xl mx-auto relative z-10 px-6">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold text-blue-200">TESTIMONIALS</h5>
          <h2 className="text-4xl font-bold text-white mt-2">What Our Community Says</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-blue-800 p-4">
                  <div className="flex items-center">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white"
                    />
                    <div className="ml-4">
                      <h6 className="text-lg font-bold text-white">{testimonial.name}</h6>
                      <span className="text-sm text-blue-200">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="italic text-gray-700 text-lg">"{testimonial.quote}"</p>
                </div>
                <div className="bg-gray-100 px-6 py-3">
                  <div className="flex justify-end">
                    <div className="text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;