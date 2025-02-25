import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCreative, Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images here
import slider1 from '../Slider/sliderImg/slider1.jpg';
import slider2 from '../Slider/sliderImg/slider2.jpeg';
import slider3 from '../Slider/sliderImg/slider3.jpg';
import slider5 from "../Pages/InfraStructure/img/infra1.jpg";

const slides = [
  { 
    image: slider1, 
    title: 'Welcome to JD Global School', 
    subtitle: 'EXCELLENCE IN EDUCATION',
    description: 'Nurturing young minds to become future leaders'
  },
  { 
    image: slider2, 
    title: 'Discover Our Campus', 
    subtitle: 'STATE-OF-THE-ART FACILITIES',
    description: 'Providing the best environment for learning and growth'
  },
  { 
    image: slider3, 
    title: 'Academic Excellence', 
    subtitle: 'HOLISTIC EDUCATION',
    description: 'Balancing academics, sports, arts, and character development'
  },
  { 
    image: slider5, 
    title: 'Join Our Community', 
    subtitle: 'A CO-EDUCATIONAL EXPERIENCE',
    description: 'Creating a diverse and inclusive learning environment'
  },
];

const EnhancedSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="slider-part" className="w-full relative overflow-hidden">
      <Swiper
        modules={[EffectCreative, Autoplay, Navigation, Pagination, Keyboard]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={1200}
        autoplay={{
          delay: 6000,
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
        onSlideChange={handleSlideChange}
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
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 transition-opacity duration-1000"></div>
              
              {/* Animated particles effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="particles-container">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i}
                      className="particle"
                      style={{
                        '--particle-size': `${Math.random() * 10 + 5}px`,
                        '--x-pos': `${Math.random() * 100}%`,
                        '--y-pos': `${Math.random() * 100}%`,
                        '--duration': `${Math.random() * 10 + 10}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="overflow-hidden mb-2"
                    >
                      <motion.span className="inline-block text-sm md:text-base text-yellow-300 font-medium tracking-wider py-1 px-4 rounded-full bg-black/30 backdrop-blur-sm border border-yellow-500/30">
                        {slide.subtitle}
                      </motion.span>
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight relative"
                    >
                      {slide.title}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "40%" }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto mt-3"
                      />
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-2 text-lg sm:text-xl md:text-2xl text-white/90 font-light"
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-8"
                    >
                      <button className="py-3 px-6 text-sm md:text-base bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        LEARN MORE
                      </button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Navigation Buttons */}
        <div className="swiper-button-next !w-14 !h-14 !right-6"></div>
        <div className="swiper-button-prev !w-14 !h-14 !left-6"></div>

        {/* Enhanced Pagination */}
        <div className="swiper-pagination !bottom-10"></div>
      </Swiper>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center space-x-3">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-1 transition-all duration-500 ${index === activeIndex ? 'w-10 bg-yellow-400' : 'w-4 bg-white/40'}`}
          ></div>
        ))}
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-origin: center;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(234, 179, 8, 0.2);
          border-color: rgba(234, 179, 8, 0.5);
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(234, 179, 8, 0.4);
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
          background-color: #eab308;
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: var(--particle-size);
          height: var(--particle-size);
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          top: var(--y-pos);
          left: var(--x-pos);
          animation: float var(--duration) infinite linear;
          opacity: 0;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100px) translateX(30px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedSlider;