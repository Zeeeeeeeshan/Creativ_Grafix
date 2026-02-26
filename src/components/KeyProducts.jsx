"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function KeyProducts({ color }) {
  const products = [
    { name: "Visiting Cards", icon: "/ProductsVisitingCard.svg" },
    { name: "Flyers & Pamphlets", icon: "/ProductsFlyersPamphlets.svg" },
    {
      name: "Brochures & Catalogues",
      icon: "/ProductsBrochuresCatalogues.svg",
    },
    {
      name: "Letterheads & Envelopes",
      icon: "/ProductsLetterHeadEnvelopes.svg",
    },
    { name: "Packaging Boxes & Bags", icon: "/ProductsBoxesBags.svg" },
    {
      name: "Corporate & School Supplies",
      icon: "/ProductsCorporateSchoolSupplies.svg",
    },
    { name: "Stickers & Labels", icon: "/ProductsStickerLabel.svg" },
    { name: "Special Prints", icon: "/ProductsSpecialPrints.svg" },
  ];

  const ProductData = [
    {
      name: "Visiting Cards",
      items: [
        "/assets/VisitingCard1.png",
        "/assets/VisitingCard2.jpg",
        "/assets/VisitingCard3.png",
        "/assets/VisitingCard4.png",
        "/assets/VisitingCard5.png",
        "/assets/VisitingCard6.jpg",
        "/assets/VisitingCard7.png",
        "/assets/VisitingCard8.jpeg",
        "/assets/VisitingCard9.png",
        "/assets/VisitingCard10.png",
        "/assets/VisitingCard11.png",
        "/assets/VisitingCard12.png",
        "/assets/VisitingCard13.png",
        "/assets/VisitingCard14.png",
        "/assets/VisitingCard15.png",
        
      ],
    },
    {
      name: "Flyers & Pamphlets",
      items: [
        "/assets/Flyers1.jpg",
        "/assets/Flyers2.png",
        "/assets/Flyers3.png",
        "/assets/Flyers4.jpg",
        "/assets/Flyers5.png",
        "/assets/Flyers6.png",
        "/assets/Flyers7.png",
        "/assets/Flyers8.png",
        "/assets/Flyers9.jpeg",
        "/assets/Flyers10.png",
        "/assets/Flyers11.jpeg",
        "/assets/Flyers12.png",
        "/assets/Flyers13.png",
        "/assets/Flyers14.png",
        "/assets/Flyers15.jpg",
      ],
    },
    {
      name: "Brochures & Catalogues",
      items: [
        "/assets/BrochureCatalogue1.png",
        "/assets/BrochureCatalogue2.png",
        "/assets/BrochureCatalogue3.png",
        "/assets/BrochureCatalogue4.png",
        "/assets/BrochureCatalogue5.png",
        "/assets/BrochureCatalogue6.png",
        "/assets/BrochureCatalogue7.png",
        "/assets/BrochureCatalogue8.jpg",
        "/assets/BrochureCatalogue9.jpg",
        "/assets/BrochureCatalogue10.jpg",
        "/assets/BrochureCatalogue11.jpg",
        "/assets/BrochureCatalogue12.jpg",
        "/assets/BrochureCatalogue13.jpg",
        "/assets/BrochureCatalogue14.jpg",
        "/assets/BrochureCatalogue15.jpg",
        "/assets/BrochureCatalogue16.jpg",
        "/assets/BrochureCatalogue17.png",
        "/assets/BrochureCatalogue18.jpg",
        "/assets/BrochureCatalogue19.jpg",
        "/assets/BrochureCatalogue20.png",
        "/assets/BrochureCatalogue21.png",
        "/assets/BrochureCatalogue22.png",
        "/assets/BrochureCatalogue23.png",
        "/assets/BrochureCatalogue24.png",
        "/assets/BrochureCatalogue25.jpg",
        "/assets/BrochureCatalogue26.png",
        "/assets/BrochureCatalogue27.png",
        "/assets/BrochureCatalogue28.png",
      ],
    },
    {
      name: "Letterheads & Envelopes",
      items: [
        "/assets/LetterheadEnvelops1.png",
        "/assets/LetterheadEnvelops2.png",
        "/assets/LetterheadEnvelops3.png",
        "/assets/LetterheadEnvelops4.png",
        "/assets/LetterheadEnvelops5.png",
        "/assets/LetterheadEnvelops6.png",
        "/assets/LetterheadEnvelops7.png",
        "/assets/LetterheadEnvelops8.jpg",
        "/assets/LetterheadEnvelops9.jpg",
        "/assets/LetterheadEnvelops10.png",
        "/assets/LetterheadEnvelops11.png",
        "/assets/LetterheadEnvelops12.png",
        "/assets/LetterheadEnvelops13.jpg",
        "/assets/LetterheadEnvelops14.jpg",
        "/assets/LetterheadEnvelops11.png",
      ],
    },
    {
      name: "Packaging Boxes & Bags",
      items: [
        "/assets/BoxBag1.png",
        "/assets/BoxBag2.jpg",
        "/assets/BoxBag3.jpg",
        "/assets/BoxBag4.png",
        "/assets/BoxBag5.png",
        "/assets/BoxBag6.png",
        "/assets/BoxBag7.png",
        "/assets/BoxBag8.jpg",
        "/assets/BoxBag9.jpg",
        "/assets/BoxBag10.jpg",
        "/assets/BoxBag11.jpg",
        "/assets/BoxBag12.jpg",
        "/assets/BoxBag13.jpg",
        "/assets/BoxBag14.jpg",
        "/assets/BoxBag15.jpg",
        "/assets/BoxBag16.png",
        "/assets/BoxBag17.png",
        "/assets/BoxBag18.png",
        "/assets/BoxBag19.png",
        "/assets/BoxBag20.png",
        "/assets/BoxBag21.jpg",
        "/assets/BoxBag22.jpg",
        "/assets/BoxBag23.png",
        "/assets/BoxBag24.png",
        "/assets/BoxBag25.png",
        "/assets/BoxBag26.png",
        "/assets/BoxBag27.png",
        "/assets/BoxBag28.jpeg",
        "/assets/BoxBag29.jpeg",
        "/assets/BoxBag30.jpeg",
        "/assets/BoxBag31.jpeg",
        "/assets/BoxBag32.jpeg",
        "/assets/BoxBag33.jpeg",
        "/assets/BoxBag34.jpeg",
      ],
    },
    {
      name: "Corporate & School Supplies",
      items: [
        "/assets/CorporateSchool1.jpg",
        "/assets/CorporateSchool2.png",
        "/assets/CorporateSchool3.png",
        "/assets/CorporateSchool5.png",
        "/assets/CorporateSchool4.png",
        "/assets/CorporateSchool6.png",
        "/assets/CorporateSchool7.png",
        "/assets/CorporateSchool8.png",
        "/assets/CorporateSchool9.png",
        "/assets/CorporateSchool10.png",
        "/assets/CorporateSchool11.png",
        "/assets/CorporateSchool12.png",
        "/assets/CorporateSchool13.png",
        "/assets/CorporateSchool14.jpeg",
        "/assets/CorporateSchool15.jpeg",
        "/assets/CorporateSchool16.jpeg",
        "/assets/CorporateSchool17.jpeg",
        "/assets/CorporateSchool18.jpeg",
        "/assets/CorporateSchool19.jpeg",
      ],
    },
    {
      name: "Stickers & Labels",
      items: [
        "/assets/StickerLabel1.png",
        "/assets/StickerLabel2.png",
        "/assets/StickerLabel3.png",
        "/assets/StickerLabel4.jpg",
        "/assets/StickerLabel5.jpg",
        "/assets/StickerLabel6.png",
        "/assets/StickerLabel7.jpg",
        "/assets/StickerLabel8.png",
        "/assets/StickerLabel9.png",
        "/assets/StickerLabel10.png",
        "/assets/StickerLabel11.png",
        "/assets/StickerLabel12.jpeg",
        "/assets/StickerLabel13.jpeg",
        "/assets/StickerLabel14.png",
        "/assets/StickerLabel15.jpeg",
        "/assets/StickerLabel16.jpeg",
        "/assets/StickerLabel17.jpeg",
        "/assets/StickerLabel18.jpeg",
        "/assets/StickerLabel19.jpeg",
        "/assets/StickerLabel20.jpeg",
        "/assets/StickerLabel21.jpeg",
      ],
    },
    {
      name: "Special Prints",
      items: [
        "/assets/SpecialPrint1.png",
        "/assets/SpecialPrint2.png",
        "/assets/SpecialPrint3.png",
        "/assets/SpecialPrint4.png",
        "/assets/SpecialPrint5.png",
        "/assets/SpecialPrint6.png",
        "/assets/SpecialPrint7.png",
        "/assets/SpecialPrint8.png",
        "/assets/SpecialPrint9.png",
        "/assets/SpecialPrint10.jpg",
        "/assets/SpecialPrint11.jpg",
        "/assets/SpecialPrint12.png",
        "/assets/SpecialPrint13.png",
        "/assets/SpecialPrint14.jpeg",
        "/assets/SpecialPrint15.jpeg",
        "/assets/SpecialPrint16.jpeg",
        "/assets/SpecialPrint17.jpeg",
        "/assets/SpecialPrint18.png",
        "/assets/SpecialPrint19.png",
        "/assets/SpecialPrint20.png",
        "/assets/SpecialPrint21.jpg",
        "/assets/SpecialPrint22.jpg",
        "/assets/SpecialPrint23.jpg",
        "/assets/SpecialPrint24.jpg",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState("Visiting Cards");

  // Find the selected product’s images
  const selectedData =
    // ProductData.find((p) => p.name === selectedProduct)?.items || [];
    ProductData.find((p) => p.name === selectedProduct)?.items.slice(0, 15) || [];

  return (
    <div className="w-full">

      {/* ================= TABS ================= */}
      <div className="flex overflow-x-auto scrollbar-hide py-6">
        <div className="flex gap-4 px-4">

          {products.map((product) => (
            <div
              key={product.name}
              onClick={() => setSelectedProduct(product.name)}
              className={`group flex flex-col items-center justify-center 
    min-w-[130px] px-4 py-2 rounded-2xl cursor-pointer 
    transition-all duration-300 border shadow-sm
    ${selectedProduct === product.name
                  ? "bg-red-600 text-white border-red-600 shadow-xl scale-105"
                  : "bg-white border-gray-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-lg"
                }`}
            >
              <img
                src={product.icon}
                alt={product.name}
                className={`w-12 h-12 mb-2 transition-all duration-300
      ${selectedProduct === product.name
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                  }`}
              />

              <span className="text-sm font-semibold text-center">
                {product.name}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="w-full py-12 bg-gradient-to-b from-red-50 to-white rounded-3xl">

        {selectedData.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">

            {selectedData.map((src, index) => (
              <Link to="/services" key={index}>

                <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                  {/* Image */}
                  <img
                    src={src}
                    alt={`${selectedProduct} ${index + 1}`}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                    {/* Premium Button */}
                    <button
                      className="px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg 
                                 transform translate-y-6 group-hover:translate-y-0 
                                 transition-all duration-500 
                                 hover:bg-red-600 hover:text-white"
                    >
                      View Design
                    </button>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No images available.
          </p>
        )}

      </div>

    </div>


  );
}
