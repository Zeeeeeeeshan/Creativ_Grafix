import { useEffect } from "react";
import CTA from "../components/CTA";
import KeyProducts from "../components/KeyProducts";
export default function Products() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="">
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
      <div className="bg-[#f8fcff] shadow-lg shadow-black/10 px-3">
        <div className=" mx-auto lg:px-19  pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          {/* Left: Heading */}
          <div className="flex flex-col gap-y-3.5 md:w-1/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-nowrap">
              <span className="">OUR</span>{" "}
              <span className="bg-black font-bold text-white px-3 py-1">
                PRODUCTS
              </span>
            </h2>
            <p>
              We offer more than <b>90+ premium</b> printing products to meet
              every business and personal need.
            </p>
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
      <div className="py-5">
        <KeyProducts color={"white"} />
      </div>
      <CTA />
    </section>
  );
}
