import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ServiceDisplay() {
  const scrollRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "VISITING CARDS",
      image: "/HomeVisitingCard.svg",
    },
    {
      id: 2,
      title: "BROCHURES",
      image: "/HomeBrochures.svg",
    },
    {
      id: 3,
      title: "CALENDARS",
      image: "/HomeCalendar.svg",
    },
    {
      id: 4,
      title: "PACKAGING",
      image: "/HomePackaging.svg",
    },
    {
      id: 5,
      title: "BILL BOOKS",
      image: "/HomeBillBooks.svg",
    },
    {
      id: 6,
      title: "LABELS",
      image: "/HomeLabels.svg",
    },
  ];

  // Duplicate services for infinite scroll
  const duplicatedServices = [
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Adjust speed (lower = slower, higher = faster)

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll when reaching the end of first set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Link to="/services">
  <section className="bg-gradient-to-b from-[#1f1f1f] to-[#2a2a2a] 
                      py-8 w-full overflow-hidden">

    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-gray-400 uppercase tracking-[3px] text-sm mb-3">
        What We Offer
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        OUR <span className="text-redShade">SERVICES</span>
      </h2>
      <div className="w-24 h-[2px] bg-redShade mx-auto mt-4"></div>
    </div>

    {/* Auto-scrolling container */}
    <div
      ref={scrollRef}
      className="overflow-x-hidden px-6"
    >
      <div className="flex gap-8">

        {duplicatedServices.map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="flex-shrink-0 w-52 md:w-64"
          >

            {/* Card */}
            <div className="group bg-[#2f2f2f] 
                            rounded-2xl 
                            border border-white/10
                            shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                            hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)]
                            transition-all duration-500
                            p-6 text-center">

              {/* Icon */}
              <div className="h-40 flex items-center justify-center mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full object-contain 
                             transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold 
                             text-sm md:text-base 
                             tracking-wider
                             group-hover:text-redShade
                             transition-colors duration-300">
                {service.title}
              </h3>

              {/* Accent Line */}
              <div className="mt-4 h-[2px] w-0 bg-redShade 
                              mx-auto 
                              group-hover:w-12 
                              transition-all duration-500">
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>

  </section>
</Link>

  );
}
