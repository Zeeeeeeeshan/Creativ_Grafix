import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const galleryImages = [
  {
    src: "/images/img1.jpg",
    title: "Premium Visiting Card",
    desc: "High quality matte laminated business card.",
  },
  {
    src: "/images/img2.jpg",
    title: "Flyer Design",
    desc: "Creative promotional flyer design.",
  },
  {
    src: "/images/img3.jpg",
    title: "Corporate Brochure",
    desc: "Modern corporate brochure layout.",
  },
  // Add up to 10 images
];

export default function ImageGallery() {
  return (
    <div className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-red-600">Portfolio</span>
        </h2>

        {/* LightGallery Wrapper */}
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
        >

          <div className="flex gap-6 overflow-x-auto scrollbar-hide">

            {galleryImages.map((item, index) => (
              <a
                key={index}
                href={item.src}
                data-sub-html={`<h4>${item.title}</h4><p>${item.desc}</p>`}
                className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}

          </div>

        </LightGallery>

      </div>

    </div>
  );
}
