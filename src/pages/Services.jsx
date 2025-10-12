import CTA from "../components/CTA";

export default function Services() {
  return (
    <section>
      <div className="bg-[#f8fcff] shadow-lg shadow-black/10 ">
        <div className=" mx-auto lg:px-19  pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          {/* Left: Heading */}
          <div className="flex flex-col gap-y-3.5 md:w-1/3 px-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-nowrap">
              <span className="">OUR</span>{" "}
              <span className="bg-black font-bold text-white px-3 py-1">
                SERVICES
              </span>
            </h2>
            <p>
              <b>We offer</b> a full range of <b>professional</b> printing
              services for businesses, corporates, schools, and restaurant.
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
      <div className="h-screen w-full flex flex-col items-center justify-start text-center px-8 py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">BUSINESS</span> PRINTING
          SERVICES
        </h1>
        <span className="border-2 w-1/12 mt-4"></span>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-start text-center px-8 py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">PACKAGING</span> & BRANDING
        </h1>
        <span className="border-2 w-1/12 mt-4"></span>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-start text-center px-8 py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">CORPORATE</span> &
          EDUCATIONAL PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4"></span>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-start text-center px-8 py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">RESTAURANT</span> PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4"></span>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-start text-center px-8 py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">SPECIAL</span> PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4"></span>
      </div>
      <CTA />
    </section>
  );
}
