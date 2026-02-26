import { useEffect } from "react";
import CTA from "../components/CTA";
import { useRef, useState } from "react";

const About = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
    "/clients/client3.jpeg",
    "/clients/client4.avif",
    "/clients/client5.png",
  ];

  // pdf images
  const portfolioItems = [

    {
      img: "/assets/img1.jpg",
      title: "Lamination Machine (Thermal)",

      description: `Type: Thermal / Plain Lamination
Working Width: ~600 mm (24")
Process: Heat-based lamination using BOPP film`,

      applications: [
        "Posters",
        "Book covers",
        "Brochures",
        "Visiting cards",
        "Labels"
      ],

      features: [
        "Heated roller system",
        "Manual pressure adjustment",
        "Suitable for gloss & matte films",
        "Heavy-duty industrial body"
      ]
    },

    {
      img: "/assets/img2.jpg",
      title: "2-in-1 Lamination Machine",

      description: `Type: Thermal + Cold (Pressure) Lamination
Working Width: 24–30 inch`,

      applications: [
        "Digital prints",
        "Offset sheets",
        "Vinyl & synthetic media"
      ],

      features: [
        "Dual-mode lamination (hot & cold)",
        "Adjustable speed & pressure",
        "Ideal for short-run & premium jobs"
      ]
    },

    {
      img: "/assets/img3.jpg",
      title: "4 Color Offset Printer – 26 inch",

      description: `Printing: CMYK Sheet-fed Offset
Cylinder: Chrome cylinders`,

      applications: [
        "Brochures",
        "Flyers",
        "Catalogs",
        "Posters",
        "Packaging sheets"
      ],

      features: [
        "High print consistency",
        "Long cylinder life",
        "Medium–high volume production"
      ]
    },

    {
      img: "/assets/img4.jpg",
      title: "Digital Mini Offset Printer (Canon V400)",

      description: `Paper Size: 13x19
Short-run color printing`,

      applications: [
        "Variable data printing",
        "Small quantity jobs",
        "Urgent print work"
      ],

      features: [
        "Fast setup",
        "Low wastage",
        "Quick turnaround"
      ]
    },

    {
      img: "/assets/img5.jpg",
      title: "Cutting Machine – 42 inch",

      description: `Hydraulic / Semi-automatic operation
High-carbon steel blade`,

      applications: [
        "Paper cutting",
        "Board trimming",
        "Print finishing"
      ],

      features: [
        "Accurate back gauge",
        "Safety clamp",
        "Heavy-duty build"
      ]
    },

    {
      img: "/assets/img6.jpg",
      title: "UV Spot & Texture Machine – 32 inch",

      description: `UV Spot & Raised Texture Coating`,

      applications: [
        "Visiting cards",
        "Wedding cards",
        "Premium covers",
        "Packaging"
      ],

      features: [
        "Spot UV effects",
        "Texture finishing",
        "UV curing system"
      ]
    },

    {
      img: "/assets/img7.jpg",
      title: "Creasing Machine",

      description: `Manual / Semi-automatic creasing`,

      applications: [
        "Greeting cards",
        "Folders",
        "Book covers"
      ],

      features: [
        "Crack-free folds",
        "Adjustable width"
      ]
    },

    {
      img: "/assets/img8.jpg",
      title: "Single Colour Offset Printer – 32 inch",

      description: `Single color sheet-fed offset printing`,

      applications: [
        "Letterheads",
        "Forms",
        "Bill books",
        "Text printing"
      ],

      features: [
        "Cost-effective",
        "High speed",
        "Reliable bulk printing"
      ]
    }

  ];

  return (
    <>
      <section className="w-full bg-white text-gray-800">
        {/* ===== Top Section ===== */}
        <div className="bg-[#f8fcff] shadow-lg shadow-black/10">
          <div className="mx-auto px-4 pt-2 flex flex-col items-center">

            <div className="w-full">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">

                <video
                  className="w-full aspect-video object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/videos/Creative%20Grafix%20-%20Video%20Ad%20One%20Minute.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>
            </div>

          </div>
        </div>
       





        {/* pdf images here */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-red-600">Infrastructure</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-4">
                Advanced Printing Machines Built for Production Efficiency
              </p>
            </div>

            {/* Grid */}
            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
                >

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 text-left">

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <div className="text-sm text-gray-600 whitespace-pre-line">
                      {item.description}
                    </div>

                    {/* Applications */}
                    {item.applications?.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">
                          Applications
                        </h4>

                        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                          {item.applications.map((app, i) => (
                            <li key={i}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Features */}
                    {item.features?.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">
                          Key Features
                        </h4>

                        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                          {item.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>


        {/* End pdf images */}
        {/* ===== Our Story Section ===== */}
        <div className="max-w-7xl mx-auto py-20 px-6">

          {/* Title */}
          <div className="mb-14 text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-gray-800">
              About <span className="text-redShade font-bold">Creativ Grafix</span>
            </h3>

            <h4 className="mt-3 text-xl font-semibold text-gray-600">
              Shaping Imaginations. It All Starts Here.
            </h4>

            <h3 className="mt-4 text-lg font-semibold text-redShade">
              Co-Founders - Naresh Bhatnagar & Mohammed Hameed Uddin
            </h3>

            <div className="w-24 h-[3px] bg-redShade mx-auto mt-6"></div>
          </div>


          {/* Intro */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-10">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              For over 25 years, Creativ Grafix has been the trusted name in design, printing, and branding solutions across Hyderabad,
              Secunderabad, and the Twin Cities. We are more than a printing company — we are a creative powerhouse that blends design
              excellence, print precision, and technological innovation to help brands express their identity with impact.
            </p>
          </div>


          {/* Section Helper Style */}
          <div className="space-y-8">

            {/* Our Journey */}
            <div className="bg-gray-50 border-l-4 border-redShade p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-3">Our Journey</h2>
              <p>
                Founded with a simple idea — to make creativity accessible and printing dependable — Creativ Grafix began as a small design
                studio and has evolved into one of the <b>most respected end-to-end design and print companies in Hyderabad.</b>
                From humble beginnings, we’ve grown through passion, innovation, and a deep understanding of our clients’ visual communication
                needs. Today, we proudly partner with leading brands, schools, corporates, and entrepreneurs, delivering outstanding results
                that stand the test of time.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
              <p>
                To be South India’s most innovative and dependable branding, design, and printing company, where creativity and technology
                come together to shape imaginations and empower every client’s identity.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 border-l-4 border-redShade p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                To deliver comprehensive, in-house design and print solutions that combine art, technology, and expertise — enabling brands
                to communicate with clarity, confidence, and creativity. At Creativ Grafix, It All Starts Here — from the spark of an idea
                to the final printed
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Our Expertise and Team</h2>
              <p>
                Our biggest strength lies in our experienced designers, creative strategists, and production specialists. Every member of our
                team brings deep expertise, artistic vision, and technical mastery. We specialize in logo design, brand identity creation,
                corporate branding, institutional and school branding, customized merchandise, and marketing collaterals — ensuring every
                project reflects the client’s unique personality. Our designers are trained to understand color psychology, typography,
                brand storytelling, and modern layout techniques, transforming ideas into visuals that captivate and connect. Their creativity,
                paired with our print precision, ensures every piece carries the perfect balance of art and functionality.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-gray-50 border-l-4 border-redShade p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-3">Technology and Infrastructure</h2>
              <p>
                Creativ Grafix houses a complete in-house printing setup, ensuring speed, consistency, and uncompromised quality. Our facility
                features advanced offset, digital, and large-format printing machines, along with a dedicated post-press unit for lamination,
                cutting, binding, foiling, embossing, and finishing — all done under one roof. This complete control over production allows us
                to handle everything — from logo creation to full-scale brand roll-outs — efficiently, affordably, and with precision.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Commitment to Quality and Service</h2>
              <p>
                We believe that every design and print we produce is a reflection of our client’s brand — and our craftsmanship. That’s why we
                follow stringent quality checks at every stage of production. Our goal is simple: deliver superior design and print outputs
                that look beautiful, feel premium, and perform effectively. We combine creativity, technical knowledge, and service excellence
                to provide a smooth, satisfying experience every time.
              </p>
            </div>

            {/* Customer */}
            <div className="bg-gray-50 border-l-4 border-redShade p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-3">Customer-Centric Approach</h2>
              <p>
                At Creativ Grafix, we treat every project — big or small — with equal passion. Our team works closely with clients, offering
                consultation, design direction, and printing expertise to bring their vision to life. From <b>corporate identities to customized
                  school branding and personalized print materials,</b> we deliver everything with precision and pride.
              </p>
            </div>

            {/* Difference */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Experience the Creativ Grafix Difference</h2>
              <p>
                With more than two decades of expertise, a strong local presence, and a fully in-house setup, we remain the preferred choice for
                <b> businesses seeking design, printing, and branding in Hyderabad.</b>
                Our combination of <b>creativity, innovation, and craftsmanship</b> ensures every client walks away with something exceptional —
                because at Creativ Grafix, <b>Shaping Imaginations is what we do best.</b>
              </p>
            </div>

          </div>


          {/* Ending */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-redShade">
              Creativ Grafix - Shaping Imaginations. It All Starts Here.
            </h3>
            <p className="text-xl text-gray-700">
              Design | Print | Brand | Deliver - All Under One Roof
            </p>
          </div>

        </div>

      </section>
      <section className="w-full">


        {/* Our Top Clients */}
        <div className="bg-[#1f2937] py-20 px-4">

          {/* ===== Heading ===== */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              OUR <span className="text-red-600">TOP CLIENTS</span>
            </h2>

            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* ===== Clients Grid ===== */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

              {[
                "client1.png",
                "client2.png",
                "client3.jpeg",
                "client4.avif",
                "client5.png",
                "client6.png",
                "client7.png",
                "client8.png",
                "client9.png",
                "client10.png",
                "client11.png",
              ].map((client, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-300 rounded-2xl 
                     h-32 md:h-50 flex items-center justify-center
                     transition-all duration-300
                     hover:shadow-lg hover:border-red-500"
                >
                  <img
                    src={`/clients/${client}`}
                    alt={`Client ${index + 1}`}
                    className="max-h-20 md:max-h-20 object-contain 
                       opacity-90 hover:opacity-100 
                       transition duration-300"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
        {/* End */}


        {/* ===== CTA Section ===== */}
        <CTA />

        {/* ===== Stats Section ===== */}
        <div className="bg-white py-20 border-t border-gray-200">

          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl py-10 px-6 
                     border border-gray-100
                     transition-all duration-300
                     hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="bg-red-50 p-4 rounded-full">
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {item.number}
                  </h3>

                  {/* Label */}
                  <p className="text-sm md:text-base text-gray-600 tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default About;
