import { useState, useEffect } from "react";

export default function DiwaliCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "",
      subtitle: "",
      description: "",
      buttonText: "",
      image: "/Carousel6.png",
    },
    {
      id: 1,
      image: "/Carousel1.png",
    },
    {
      id: 2,
      image: "/Carousel2.png",
    },
    {
      id: 3,
      image: "/Carousel3.png",
    },
    {
      id: 4,
      image: "/Carousel4.png",
    },
    {
      id: 5,
      image: "/Carousel5.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden shadow-2xl rounded-3xl">

        {/* Carousel Container */}
        <div className="relative h-125 w-full overflow-hidden bg-gray-200">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-3xl">

                  {slide.title && (
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                  )}

                  {slide.subtitle && (
                    <p className="text-xl sm:text-2xl text-red-400 font-semibold mb-4">
                      {slide.subtitle}
                    </p>
                  )}

                  {slide.description && (
                    <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed whitespace-pre-line">
                      {slide.description}
                    </p>
                  )}

                  {slide.buttonText && (
                    <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                      {slide.buttonText}
                    </button>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Dot Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                bg-black/40 backdrop-blur-md 
                px-6 py-1 rounded-full 
                flex gap-3 shadow-lg z-50">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? "bg-red-600 w-10 h-3"
                  : "bg-white/50 w-3 h-3 hover:bg-white"
                }`}
            />
          ))}

        </div>

      </div>
    </div>
  );
}
