import { useEffect } from "react";
import CTA from "../components/CTA";
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
  return (
    <>
      <section className="w-full bg-white text-gray-800">
        <div className="relative overflow-hidden bg-redShade py-4">
          {/* Gradient overlays for smooth fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-redShade to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-redShade to-transparent z-10"></div>
          {/* Animation container */}
          <div className="flex whitespace-nowrap animate-scroll-right">
            {/* Duplicate the logo multiple times for continuous loop */}
            {Array.from({ length: 52 }).map((_, i) => (
              <img
                key={i}
                src="/FooterLogo.svg"
                alt="Company Logo"
                className="mx-8 opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
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
        <div className=" mx-auto py-16 text-justify">
          <h3 className="text-3xl md:text-4xl font-semibold">
            About{" "}
            <span className="text-redShade font-bold">Creativ Grafix</span>
          </h3>
          <h4 className="mb-6 text-xl font-semibold">
            Shaping Imaginations. It All Starts Here.
          </h4>
          <h3 className="text-xl font-semibold text-redShade">
            Co-Founders - Naresh Bhatnagar & Mohammed Hameed Uddin{" "}
          </h3>
          <div className="text-gray-700 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              For over 25 years, Creativ Grafix has been the trusted name in
              design, printing, and branding solutions across Hyderabad,
              Secunderabad, and the Twin Cities. We are more than a printing
              company — we are a creative powerhouse that blends design
              excellence, print precision, and technological innovation to help
              brands express their identity with impact.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">Our Journey</h2>
            <p>
              Founded with a simple idea — to make creativity accessible and
              printing dependable — Creativ Grafix began as a small design
              studio and has evolved into one of the{" "}
              <b>
                most respected end-to-end design and print companies in
                Hyderabad.
              </b>{" "}
              From humble beginnings, we’ve grown through passion, innovation,
              and a deep understanding of our clients’ visual communication
              needs. Today, we proudly partner with leading brands, schools,
              corporates, and entrepreneurs, delivering outstanding results that
              stand the test of time.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p>
              To be South India’s most innovative and dependable branding,
              design, and printing company, where creativity and technology come
              together to shape imaginations and empower every client’s
              identity.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p>
              To deliver comprehensive, in-house design and print solutions that
              combine art, technology, and expertise — enabling brands to
              communicate with clarity, confidence, and creativity. At Creativ
              Grafix, It All Starts Here — from the spark of an idea to the
              final printed
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">Our Expertise and Team</h2>
            <p>
              Our biggest strength lies in our experienced designers, creative
              strategists, and production specialists. Every member of our team
              brings deep expertise, artistic vision, and technical mastery. We
              specialize in logo design, brand identity creation, corporate
              branding, institutional and school branding, customized
              merchandise, and marketing collaterals — ensuring every project
              reflects the client’s unique personality. Our designers are
              trained to understand color psychology, typography, brand
              storytelling, and modern layout techniques, transforming ideas
              into visuals that captivate and connect. Their creativity, paired
              with our print precision, ensures every piece carries the perfect
              balance of art and functionality.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">
              Technology and Infrastructure
            </h2>
            <p>
              Creativ Grafix houses a complete in-house printing setup, ensuring
              speed, consistency, and uncompromised quality. Our facility
              features advanced offset, digital, and large-format printing
              machines, along with a dedicated post-press unit for lamination,
              cutting, binding, foiling, embossing, and finishing — all done
              under one roof. This complete control over production allows us to
              handle everything — from logo creation to full-scale brand
              roll-outs — efficiently, affordably, and with precision.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">
              Commitment to Quality and Service
            </h2>
            <p>
              We believe that every design and print we produce is a reflection
              of our client’s brand — and our craftsmanship. That’s why we
              follow stringent quality checks at every stage of production. Our
              goal is simple: deliver superior design and print outputs that
              look beautiful, feel premium, and perform effectively. We combine
              creativity, technical knowledge, and service excellence to provide
              a smooth, satisfying experience every time.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">
              Customer-Centric Approach
            </h2>
            <p>
              At Creativ Grafix, we treat every project — big or small — with
              equal passion. Our team works closely with clients, offering
              consultation, design direction, and printing expertise to bring
              their vision to life. From{" "}
              <b>
                corporate identities to customized school branding and
                personalized print materials,
              </b>{" "}
              we deliver everything with precision and pride.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">
              Experience the Creativ Grafix Difference
            </h2>
            <p>
              With more than two decades of expertise, a strong local presence,
              and a fully in-house setup, we remain the preferred choice for
              <b>
                {" "}
                businesses seeking design, printing, and branding in Hyderabad.
              </b>
              Our combination of{" "}
              <b>creativity, innovation, and craftsmanship</b>
              ensures every client walks away with something exceptional —
              because at Creativ Grafix,{" "}
              <b>Shaping Imaginations is what we do best.</b>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-redShade">
              Creativ Grafix - Shaping Imaginations. It All Starts Here.
            </h3>
            <p className="text-xl ">
              Design | Print | Brand | Deliver - All Under One Roof
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
            OUR <span className="text-redShade font-bold">CLIENTS</span>
          </h3>
          <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-10"></div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md overflow-hidden flex items-center justify-center"
              >
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
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
