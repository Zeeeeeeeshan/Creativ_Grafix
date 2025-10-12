import { useState } from "react";

export default function KeyProducts({ color }) {
  const products = [
    {
      name: "Visiting Cards",
      icon: "/ProductsVisitingCard.svg",
    },
    {
      name: "Flyers & Pamphlets",
      icon: "/ProductsFlyersPamphlets.svg",
    },
    {
      name: "Brochures & Catalogues",
      icon: "/ProductsBrochuresCatalogues.svg",
    },
    {
      name: "Letterheads & Envelopes",
      icon: "/ProductsLetterHeadEnvelopes.svg",
    },
    {
      name: "Packaging Boxes & Bags",
      icon: "/ProductsBoxesBags.svg",
    },
    {
      name: "Corporate & School Supplies",
      icon: "/ProductsCorporateSchoolSupplies.svg",
    },
    {
      name: "Stickers & Labels",
      icon: "/ProductsStickerLabel.svg",
    },
    {
      name: "Special Prints",
      icon: "/ProductsSpecialPrints.svg",
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState("Visiting Cards");

  return (
    <div className="px-3 md:px-25 py-15">
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-x-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`flex flex-col items-center justify-center p-3 cursor-pointer rounded-t-2xl ${
                selectedProduct === product.name ? `bg-${color}` : ""
              }`}
              onClick={() => setSelectedProduct(product.name)}
            >
              <img
                src={product.icon}
                alt={product.name}
                className="w-10 h-10"
              />
              <span className="ml-4 text-center">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full h-100 bg-${color}`}></div>
    </div>
  );
}
