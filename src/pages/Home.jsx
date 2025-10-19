import { Link } from "react-router-dom";
import DiwaliCarousel from "../components/Carousel";
import ServiceDisplay from "../components/ServiceDisplay";
import KeyProducts from "../components/KeyProducts";
import CTA from "../components/CTA";
import { Star } from "lucide-react";

export default function Home() {
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
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-around w-full p-8 mt-5">
        <div className="lg:w-2/3">
          <DiwaliCarousel />
        </div>
        <div className="rounded-4xl bg-grayShade lg:w-2/7 mt-4 lg:mt-0 px-6 py-8 flex flex-col gap-y-7">
          <h1 className="text-3xl">
            OUT <span className="text-redShade font-bold">STORY</span>
          </h1>
          <p>
            At <b>Creativ Grafix</b>, we believe every print tells a story.
            Founded with a vision to transform Hyderabad’s printing industry, we
            have grown into a trusted name for quality and reliability.
          </p>
          <p>
            Located at Redhills, opposite Rupani Apartments, we proudly serve
            clients across Telangana. With strong roots in Lakdikapul and Chatta
            Bazar, we are known for our dedication, honesty, and commitment to
            delivering printing services that exceed expectations.
          </p>
          <Link to="/about" className="text-redShade flex items-center gap-2.5">
            More About us <img src="/HomeArrow.svg" alt="" />
          </Link>
        </div>
      </div>
      <ServiceDisplay />
      <div>
        <div className="flex justify-center items-center flex-col py-8">
          <h1 className="text-3xl">
            OUR KEY <span className="font-bold text-redShade">PRODUCTS</span>
          </h1>
          <span className="border-2 border-black w-1/12 mt-2"></span>
        </div>

        <KeyProducts />
        <div className="text-center mb-3">
          <Link to="/products" className="border-b-redShade border-b">
            View All Products
          </Link>
        </div>
      </div>
      <div className="bg-[#222222] flex flex-col gap-y-8 py-8">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-white">
            OUR <span className="text-redShade">TOP CLIENT</span>
          </h1>
          <span className="border-2 border-white w-1/12 mt-3"></span>
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex justify-center items-center gap-x-3.5">
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
            <div className="h-70 w-70 bg-white rounded-3xl"></div>
          </div>
        </div>
      </div>
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
      <div className="bg-[#eeeeee] py-12">
        <div className="max-w-6xl mx-auto px-16 py-11 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={item.label}
                className="w-20 h-20 mb-3"
              />
              <h3 className="text-3xl">{item.number}</h3>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
