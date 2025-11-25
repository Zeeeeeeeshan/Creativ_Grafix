import { useEffect } from "react";
import CTA from "../components/CTA";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section>
      <div className="bg-[#f8fcff] shadow-lg shadow-black/10 ">
        <div className=" mx-auto md:px-19  pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          {/* Left: Heading */}
          <div className="flex flex-col gap-y-3.5 md:w-1/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-nowrap">
              <span className="bg-black font-bold text-white px-3 py-1">
                CONTACT
              </span>{" "}
              <span className="">US</span>
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
      <div className="w-full relative">
        <img src="/ContactMap.svg" alt="" className="w-full object-contain" />
        <div className="lg:absolute flex flex-col gap-y-3 lg:w-1/4 py-8 px-5 bg-white top-15 left-20 shadow-xl shadow-black/30">
          <h2 className="text-redShade text-3xl font-semibold">Get in Touch</h2>
          <p className="">
            We're here to answer any questions you may have. Reach out to us and
            we'll respond as soon as we can.
          </p>
          <form action="" className="flex flex-col gap-y-5">
            <input
              type="text"
              placeholder="Entre Your Name"
              className="border border-redShade p-1.5"
            />
            <input
              type="text"
              placeholder="Enter Your E-mail ID"
              className="border border-redShade p-1.5"
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="border border-redShade p-1.5"
            />
            <textarea
              name=""
              id=""
              placeholder="Enter Your Message"
              className="border border-redShade p-1.5"
            ></textarea>
            <button type="submit" className="bg-redShade text-white py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      <CTA />
    </section>
  );
}
