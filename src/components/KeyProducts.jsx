"use client";
import { useState } from "react";

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
        "/assets/VisitingCard2.png",
        "/assets/VisitingCard3.png",
        "/assets/VisitingCard4.png",
        "/assets/VisitingCard5.png",
        "/assets/VisitingCard6.png",
      ],
    },
    {
      name: "Flyers & Pamphlets",
      items: [
        "/assets/Flyers1.png",
        "/assets/Flyers2.png",
        "/assets/Flyers3.png",
        "/assets/Flyers4.png",
        "/assets/Flyers5.png",
        "/assets/Flyers6.png",
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
      ],
    },
    {
      name: "Letterheads & Envelopes",
      items: [
        "/assets/LetterheadEnvelops1.png",
        "/assets/LetterheadEnvelops2.png",
        "/assets/LetterheadEnvelops3.png",
        "/assets/LetterheadEnvelops4.png",
      ],
    },
    {
      name: "Packaging Boxes & Bags",
      items: [
        "/assets/BoxBag1.png",
        "/assets/BoxBag2.png",
        "/assets/BoxBag3.png",
        "/assets/BoxBag4.png",
        "/assets/BoxBag5.png",
      ],
    },
    {
      name: "Corporate & School Supplies",
      items: [
        "/assets/CorporateSchool1.png",
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
        "/assets/CorporateSchool14.png",
        "/assets/CorporateSchool15.png",
      ],
    },
    {
      name: "Stickers & Labels",
      items: ["/assets/StickerLabel1.png", "/assets/StickerLabel2.png"],
    },
    {
      name: "Special Prints",
      items: [
        "/assets/SpecialPrint3.png",
        "/assets/SpecialPrint4.png",
        "/assets/SpecialPrint1.png",
        "/assets/SpecialPrint2.png",
        "/assets/SpecialPrint5.png",
        "/assets/SpecialPrint6.png",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState("Visiting Cards");

  // Find the selected product’s images
  const selectedData =
    ProductData.find((p) => p.name === selectedProduct)?.items || [];

  return (
    <div className="px-3 md:px-25 py-15">
      {/* Top Scrollable Tabs */}
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-x-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`flex flex-col items-center justify-center p-3 cursor-pointer rounded-t-2xl transition-all ${
                selectedProduct === product.name
                  ? `${color ? `bg-${color}` : "bg-red-200"}`
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedProduct(product.name)}
            >
              <img
                src={product.icon}
                alt={product.name}
                className="w-10 h-10"
              />
              <span className="mt-2 text-center text-sm">{product.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Display Area */}
      <div
        className={`w-full py-10 bg-${color ? color : "red-50"} rounded-b-2xl`}
      >
        {selectedData.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {selectedData.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${selectedProduct} ${index + 1}`}
                className="h-55 rounded-xl p-2 bg-gray-200 shadow-md hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No images available.</p>
        )}
      </div>
    </div>
  );
}
