import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';

import slider1 from '../Slider/sliderImg/slider1.jpg';
import slider2 from '../Slider/sliderImg/slider2.jpeg';
import slider3 from '../Slider/sliderImg/slider3.jpg';
import slider4 from '../Slider/sliderImg/slider4.jpeg';

const slides = [
  { image: slider1, title: 'Welcome to JD Global School', subtitle: 'ENGLISH MEDIUMS' },
  { image: slider2, title: 'Welcome To J.D Global School', subtitle: '(A Co-Educational Group Of Schools)' },
  { image: slider3, title: 'Welcome To J.D Global School', subtitle: '(A Co-Educational Group Of Schools)' },
];

const Slider = () => {
  return (
    <section id="slider-part" className="w-full relative overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination, Keyboard]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        keyboard={{ enabled: true }}
        lazy={{ loadPrevNext: true }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* Gradient overlay instead of solid black */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3
                }}
                className="relative z-10 text-center max-w-4xl mx-auto px-8"
              >
                <motion.h1 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light"
                >
                  {slide.subtitle}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Navigation Buttons */}
        <div className="swiper-button-next !w-12 !h-12 !right-6"></div>
        <div className="swiper-button-prev !w-12 !h-12 !left-6"></div>

        {/* Enhanced Pagination */}
        <div className="swiper-pagination !bottom-10"></div>
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.4);
          border: 2px solid transparent;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 6px;
        }

        .swiper-pagination-bullet-active {
          background-color: white;
          border-color: white;
          transform: scale(1.2);
        }

        .swiper-container {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Slider;