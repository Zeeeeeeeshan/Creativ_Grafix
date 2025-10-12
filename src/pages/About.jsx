import CTA from "../components/CTA";
const About = () => {
  const stats = [
    {
      icon: "/AboutHappyClients.svg",
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: "/AboutProjectCompleted.svg",
      number: "3000+",
      label: "Projects Completed",
    },
    {
      icon: "/AboutDeliveryTime.svg",
      number: "24 Hr",
      label: "Delivery Time",
    },
    {
      icon: "/AboutSatisfactionRate.svg",
      number: "99%",
      label: "Satisfaction Rate",
    },
  ];

  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
  ];
  return (
    <>
      <section className="w-full bg-white text-gray-800">
        {/* ===== Top Section ===== */}
        <div className="bg-[#f8fcff] shadow-lg shadow-black/10 ">
          <div className=" mx-auto px-19  pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            {/* Left: Heading */}
            <div className="flex flex-col gap-y-3.5 md:w-1/3">
              <h2 className="text-2xl md:text-3xl lg:text-5xl">
                <span className="bg-black font-bold text-white px-3 py-1">
                  ABOUT
                </span>{" "}
                US
              </h2>
            </div>

            {/* Right: Illustration */}
            <div className="md:w-2/3">
              <img
                src="/AboutIllustration.svg" // your image in public folder
                alt="About Illustration"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ===== Our Story Section ===== */}
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            OUR <span className="text-red-600 font-bold">STORY</span>
          </h3>
          <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-10"></div>

          <div className="text-gray-700 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              At Creativ Grafix, we believe that every printed material tells a
              story. Founded with a vision to transform the printing industry in
              Hyderabad, we have established ourselves as a beacon of quality
              and reliability.
            </p>

            <p>
              Located in the heart of Hyderabad at Redhills, opposite Rupani
              Apartments, we serve clients across Telangana with dedication and
              expertise. Our journey began with a simple mission: to provide
              unparalleled printing services that exceed customer expectations.
            </p>

            <p>
              Today, we stand proud as a unique presence in the printing markets
              of Lakdikapul and Chatta Bazar, known for our commitment to
              quality, responsibility, and complete honesty in every project we
              undertake.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        {/* ===== Stats Section ===== */}
        <div className="bg-[#222222] text-white py-12">
          <div className="max-w-6xl mx-auto px-16 py-11 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-20 h-20 mb-3"
                />
                <h3 className="text-3xl">{item.number}</h3>
                <p className="text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Our Clients Section ===== */}
        <div className="bg-gray-100 py-16 px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            OUR <span className="text-red-600 font-bold">CLIENTS</span>
          </h3>
          <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-10"></div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md py-20 flex items-center justify-center"
              ></div>
            ))}
          </div>
        </div>

        {/* ===== CTA Section ===== */}
        <CTA />
      </section>
    </>
  );
};

export default About;
