import { useState, useEffect } from "react";

export default function DiwaliCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Custom Printing",
      subtitle: "For this Diwali",
      description: "Frames, Calendars, Mugs\nGift Boxes, Banners & more",
      buttonText: "EXPLORE PRODUCTS",
      image: "/HomeCarousel1.svg",
    },
    {
      id: 2,
      title: "Top Selling Printing",
      subtitle: "Products This Season!",
      description:
        "Our clients favorites - designed, \nprinted & delivered with perfection",
      buttonText: "EXPLORE PRODUCTS",
      image: "/HomeCarousel2.svg",
    },
    {
      id: 3,
      title: "Corporate Branding",
      subtitle: "Solution That Speak for You",
      description:
        "From business cards to office branding -\nwe print your professional identity \n with perfection.",
      buttonText: "EXPLORE PRODUCTS",
      image: "/HomeCarousel3.svg",
    },
    {
      id: 4,
      title: "Printing Solutions for",
      subtitle: "School & Colleges",
      description:
        "From ID Cards to Yearbooks - \nWe Print Memories That Last.",
      buttonText: "EXPLORE PRODUCTS",
      image: "/HomeCarousel4.svg",
    },
    {
      id: 5,
      title: "Customized Branding for",
      subtitle: "Small & Medium Businesses",
      description:
        "From Visiting Cards to Receipts - \nEverything Your Business Needs, \nPrinted Prefectly.",
      buttonText: "EXPLORE PRODUCTS",
      image: "/HomeCarousel5.svg",
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
      <div className="relative rounded-4xl overflow-hidden shadow-2xl">
        {/* Carousel Container */}
        <div className="relative h-125 w-full overflow-hidden bg-gray-200">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="px-8 sm:px-12 lg:px-20 max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-4 sm:mb-6 text-nowrap">
                    {slide.subtitle}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 whitespace-pre-line leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="bg-white text-redShade px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-redShade hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-8 sm:left-12 lg:left-20 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                index === currentSlide
                  ? "bg-redShade border-white w-10 h-3"
                  : "bg-white/40 border-white/60 w-3 h-3 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
