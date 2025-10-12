import { Link } from "react-router-dom";
import DiwaliCarousel from "../components/Carousel";
import ServiceDisplay from "../components/ServiceDisplay";
import KeyProducts from "../components/KeyProducts";
import CTA from "../components/CTA";
export default function Home() {
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
      <div className="flex flex-col md:flex-row justify-around w-full p-8 mt-5">
        <div className="md:w-2/3">
          <DiwaliCarousel />
        </div>
        <div className="rounded-4xl bg-grayShade md:w-2/7 mt-4 md:mt-0 px-6 py-8 flex flex-col gap-y-7">
          <h1 className="text-3xl">
            OUT <span className="text-red-600 font-bold">STORY</span>
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
          <Link to="/about" className="text-red-600 flex items-center gap-2.5">
            More About us <img src="/HomeArrow.svg" alt="" />
          </Link>
        </div>
      </div>
      <ServiceDisplay />
      <div>
        <div className="flex justify-center items-center flex-col py-8">
          <h1 className="text-3xl">
            OUR KEY <span className="font-bold text-red-500">PRODUCTS</span>
          </h1>
          <span className="border-2 border-black w-1/12 mt-2"></span>
        </div>

        <KeyProducts  />
        <div className="text-center mb-3">
          <Link to="/products" className="border-b-red-500 border-b">
            View All Products
          </Link>
        </div>
      </div>
      <div className="bg-[#222222] flex flex-col gap-y-8 py-8">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-white">
            OUR <span className="text-red-500">TOP CLIENT</span>
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
          <h1 className="text-3xl text-white">
            GOOGLE <span className="font-bold">REVIEWS</span>
          </h1>
          <span className="border-2 border-white w-1/12 mt-3"></span>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide justify-center">
          <div className="flex justify-evenly items-center gap-x-4">
            <img src="/HomeReviewCard1.svg" alt="" />
            <img src="/HomeReviewCard2.svg" alt="" />
            <img src="/HomeReviewCard3.svg" alt="" />
          </div>
        </div>
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
