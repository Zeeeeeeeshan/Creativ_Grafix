import { useEffect, useRef } from "react";

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
    <section className="bg-[#222222] flex flex-col py-10 gap-y-7 w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">
          OUR <span className="font-bold text-redShade">SERVICES</span>
        </h1>
        <span className="border-2 border-white w-20 my-3"></span>
      </div>

      {/* Auto-scrolling container */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden scrollbar-hide px-4 md:px-8"
      >
        <div className="flex ">
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="flex-shrink-0 w-45 md:w-64 group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden">
                {/* Image Container with fixed height */}
                <div className="h-44 md:h-52 lg:h-60 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <div className="py-4 px-6">
                  <h3 className="text-white font-bold text-center text-sm md:text-base lg:text-lg tracking-wider">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
