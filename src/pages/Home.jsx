import { Link } from "react-router-dom";
import DiwaliCarousel from "../components/Carousel";
import ServiceDisplay from "../components/ServiceDisplay";
import KeyProducts from "../components/KeyProducts";
import CTA from "../components/CTA";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";

// gallery import
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function Home() {
  // video function
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const [showVideo, setShowVideo] = useState(true);
  const reelVideoRef = useRef(null);

  const closeVideo = (e) => {
    e.stopPropagation();

    const video = reelVideoRef.current;
    if (video) {
      video.pause();        // stop playing
      video.currentTime = 0; // reset time

      // HARD STOP (important — kills background playback)
      video.removeAttribute("src");
      video.load();
    }

    setShowVideo(false);
  };


  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };
  // End
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const reviews = [
    {
      name: "Aarav Sharma",
      review:
        "Creativ Grafix delivers top-quality designs and prints every time – clean, modern, and exactly what we need!",
    },
    {
      name: "Priya Patel",
      review:
        "From business cards to packaging, Creativ Grafix always nails it with quality and creativity.",
    },
    {
      name: "Rahul Verma",
      review:
        "Professional, reliable, and super creative – Creativ Grafix is our most trusted printing partner.",
    },
  ];

  const stats = [
    {
      icon: "/AboutHappyClients2.svg",
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: "/AboutProjectCompleted2.svg",
      number: "3000+",
      label: "Projects Completed",
    },
    {
      icon: "/AboutDeliveryTime2.svg",
      number: "24 Hr",
      label: "Delivery Time",
    },
    {
      icon: "/AboutSatisfactionRate2.svg",
      number: "99%",
      label: "Satisfaction Rate",
    },
  ];

  const galleryImages = [
    {
      src: "/assets/img1.jpg",
      title: "Lamination Machine (Thermal) ",
      desc: "Thermal / Plain Lamination"
    },
    {
      src: "/assets/img2.jpg",
      title: " 2️-in-1️ Lamination Machine",
      desc: "Thermal + Cold (Pressure) Lamination"
    },
    {
      src: "/assets/img3.jpg",
      title: "4 Color Offset Printer with Chrome Cylinders – 2️6 Printing",
      desc: "Hard chrome cylinders (visible from unit build)"
    },
    {
      src: "/assets/img4.jpg",
      title: "Digital Mini Offset Printer",
      desc: "Digital / Mini Offset Hybrid"
    },
    {
      src: "/assets/img5.jpg",
      title: "Cutting Machine – 42️ Cutting",
      desc: "Hydraulic / Semi-automatic"
    },
    {
      src: "/assets/img6.jpg",
      title: "6 4 Color Offset Printer – 2️6",
      desc: "Printing Type: Sheet-fed offset"
    },
    {
      src: "/assets/img7.jpg",
      title: "UV Spot & Texture Machine – 3️2️ Working",
      desc: "UV Spot / Raised Texture Coating"
    },
    {
      src: "/assets/img8.jpg",
      title: "Creasing Machine",
      desc: "Manual / Semi-automatic"
    },
    {
      src: "/assets/img9.jpg",
      title: "Single Colour Offset Printer – 3️2️ Printing ",
      desc: "Printing Type: Sheet-fed offset"
    }
  ];

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between gap-x-6 w-full py-8 mt-5">
        <div className="lg:w-4/7">
          <DiwaliCarousel />
        </div>

        {/* Start Video */}
        <div
          onClick={toggleVideo}
          className="rounded-3xl bg-grayShade lg:w-3/7 mt-4 lg:mt-0 
             relative cursor-pointer group overflow-hidden
             h-[320px] md:h-[400px] lg:h-[500px]"
        >

          {/* Video Wrapper (IMPORTANT FIX) */}
          {/* Video Wrapper FIX */}
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <video
              ref={videoRef}
              className="max-w-full max-h-full"
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/Creative%20Grafix%20-%20Video%20Ad%20One%20Minute.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>

          {/* Play Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition group-hover:scale-110 pointer-events-auto">
              {playing ? (
                <FaPause className="text-redShade text-xl" />
              ) : (
                <FaPlay className="text-redShade text-xl ml-1" />
              )}
            </div>
          </div>

          {/* Label */}
          <div className="absolute bottom-4 right-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full shadow">
            Creativ Grafix
          </div>

        </div>

        {/* End Video */}

      </div>
      <ServiceDisplay />
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
      <div>
        <div className="flex justify-center items-center flex-col py-8">
          <h1 className="text-3xl">
            OUR KEY <span className="font-bold text-redShade">PRODUCTS</span>
          </h1>
          <span className="border-2 border-black w-1/12 mt-2"></span>
        </div>

        <KeyProducts />
        <div className="text-center mb-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-3 
               bg-red-600 text-white font-semibold 
               rounded-full shadow-lg 
               transition-all duration-300 
               hover:bg-red-700 hover:shadow-2xl 
               hover:-translate-y-1"
          >
            View All Products
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
      {/* Our Top Clients */}
     <div className="bg-gradient-to-b from-[#111827] to-[#1f2937] py-16 px-6">

  {/* ===== Heading ===== */}
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
      OUR <span className="text-red-500">TOP CLIENTS</span>
    </h2>

    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
      Trusted by leading brands and organizations across industries.
    </p>

    <div className="w-16 h-[3px] bg-red-500 mx-auto mt-6 rounded-full"></div>
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
      ].map((client, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-md 
                     border border-white/10 
                     rounded-2xl 
                     h-28 md:h-32 
                     flex items-center justify-center 
                     transition-all duration-300 
                     hover:border-red-500 
                     hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
                     hover:-translate-y-2"
        >
          <img
            src={`/clients/${client}`}
            alt={`Client ${index + 1}`}
            className="max-h-16 md:max-h-20 object-contain 
                       opacity-70 group-hover:opacity-100 
                       transition duration-300"
          />
        </div>
      ))}

    </div>
  </div>

</div>
      {/* End */}

      {/* gallery */}
      <div className="py-8 bg-white border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-10">

            {/* Small Label */}
            <p className="text-sm uppercase tracking-[3px] text-gray-500 mb-3">
              Our Capabilities
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Our <span className="text-red-600">Infrastructure</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base md:text-lg">
              Advanced Printing Machines Built for Production Efficiency
            </p>


          </div>


          <div className="relative">

  {/* Custom Arrows */}
  <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-10">
    <button className="portfolio-prev bg-white border border-gray-300 w-10 h-10 rounded-full shadow-sm flex items-center justify-center hover:border-red-600 transition">
      ‹
    </button>
  </div>

  <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
    <button className="portfolio-next bg-white border border-gray-300 w-10 h-10 rounded-full shadow-sm flex items-center justify-center hover:border-red-600 transition">
      ›
    </button>
  </div>

  {/* ONLY SWIPER NOW */}
  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={30}
    slidesPerView={4}
    navigation={{
      prevEl: ".portfolio-prev",
      nextEl: ".portfolio-next",
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
  >

    {galleryImages.map((item, index) => (
      <SwiperSlide key={index} className="flex">

        {/* Whole Card Clickable */}
        <Link
          to="/about"
          state={item}
          className="flex flex-col w-full
          bg-white rounded-2xl
          border border-gray-300
          shadow-md hover:shadow-xl hover:-translate-y-1
          transition-all duration-300"
        >

          {/* Image */}
          <div className="h-60 w-full overflow-hidden rounded-t-2xl">
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-5">

            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 flex-grow">
              {item.desc}
            </p>

            <div className="pt-4 mt-4 border-t border-gray-100 text-sm text-red-600 font-medium">
              View Details →
            </div>

          </div>

        </Link>

      </SwiperSlide>
    ))}

  </Swiper>

</div>


        </div>

      </div>


      {/* End */}


      <div className="bg-[#800000] px-7 py-12">
        <div className="flex justify-center items-center flex-col mb-13">
          <h1 className="text-xl md:text-3xl text-white">
            GOOGLE <span className="font-bold">REVIEWS</span>
          </h1>
          <span className="border-2 border-white w-1/12"></span>
        </div>
        <section className="px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="px-6 py-5 rounded-2xl shadow-lg bg-redShade border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="border-b border-gray-300 pb-2 mb-2">
                  <h4 className="text-white font-medium">{r.name}</h4>
                </div>

                <p className="text-gray-100 text-sm leading-relaxed mb-4">
                  {r.review}
                </p>
                <div className="flex justify-between items-center gap-1 mb-3 text-yellow-400">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}
                  </div>
                  <img src="/GoogleLogo.png" alt="" className="h-8" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTA />
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

  );
}
