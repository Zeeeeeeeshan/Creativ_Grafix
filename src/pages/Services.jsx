import { useEffect } from "react";
import CTA from "../components/CTA";
import { useRef, useState } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  // Highlights data for each section
  const serviceHighlights = {
    visitingCards: [
      "350–600 GSM premium card stocks (Art, Texture, Metallic, Kraft)",
      "Matt, Gloss, Velvet, and Foil finishes",
      "Rounded corners, embossed logos, and spot UV options",
      "Custom shapes and die-cuts available",
      "Trump Cards: Non-tearable, water-resistant, and long-lasting",
    ],
    letterheads: [
      "100–120 GSM bond or textured paper",
      "Offset & digital printing options",
      "Full-color, watermark, or embossed branding",
      "Gold foil or embossed logo options",
      "Ideal for corporate communication and documentation",
    ],
    envelopes: [
      "Sizes: DL, C4, C5, C6, and custom",
      "90–120 GSM bond, texture, or kraft papers",
      "Window and non-window options",
      "Standard & custom sizes (4x10, 5x10, 9x12)",
      "Matching letterhead design available",
    ],
    folders: [
      "300–400 GSM art board",
      "Matt / gloss lamination or velvet finish",
      "Pocket and slit options for business cards",
      "Die-cut and foil branding available",
      "Business card slots & die-cut options",
    ],
    idCards: [
      "PVC, Acrylic, or laminated ID cards",
      "Barcode / QR / Magnetic stripe options",
      "Custom-designed lanyards with sublimation print",
      "Both single and double-sided printing",
      "Durable, waterproof, and perfectly aligned with branding",
    ],
    billBooks: [
      "NCR (No Carbon Required) paper sets",
      "2/3/4 ply options",
      "Sequential numbering, perforation, binding",
      "Custom branding and layout design",
      "Single, double, or multi-color printing",
    ],
    notepads: [
      "Top or side binding with hard back support",
      "A4, A5, and custom sizes",
      "70–100 GSM inner pages",
      "Personalized cover design",
      "Printed on premium bond or maplitho paper",
    ],
    stationeryKits: [
      "Complete corporate identity set",
      "High-quality materials and finishing",
      "Designed by in-house professionals",
      "Includes business cards, letterheads, envelopes, notepads, and folders",
      "All designed cohesively for unified brand experience",
    ],
    flyers: [
      "130–300 GSM paper options",
      "Gloss, matt, or texture finish",
      "Single or double-sided printing",
      "Trifold, bifold, or A4 sizes",
      "UV coating and lamination options",
      "Creative design assistance available",
    ],
    brochures: [
      "A4, A5, tri-fold, bi-fold, or custom sizes",
      "170–300 GSM art paper",
      "Gloss or matte lamination",
      "Stapled, perfect bound, or wire-o binding",
      "Multi-page layout with images",
    ],
    posters: [
      "Sizes: A3, A2, A1, A0, and custom",
      "Matt or gloss paper finishes",
      "Gloss / Matt / Vinyl options",
      "Indoor and outdoor media options",
      "Vivid color and clarity using large-format printing",
    ],
    stickers: [
      "Paper, vinyl, transparent, and metallic stickers",
      "Kiss-cut or die-cut options",
      "Gloss, matt, or UV finish",
      "Permanent and removable adhesive types",
      "Waterproof and UV-coated options",
    ],
    danglers: [
      "300–400 GSM art board",
      "Matt / gloss lamination",
      "Die-cut and string options",
      "Gloss/matt finish, die-cut",
      "Threading and punching options",
    ],
    menus: [
      "300–400 GSM art board",
      "Matt, gloss, or velvet finish",
      "Waterproof lamination",
      "Folded or tent-style designs",
      "Water-resistant coating available",
    ],
    corporateGifts: [
      "High-quality sublimation & UV printing",
      "Durable materials and premium finishes",
      "Products: Mugs, bottles, pens, caps, T-shirts, mouse pads, keychains, fridge magnets",
      "Custom-printed bags and gift boxes",
    ],
    educational: [
      "Hard & soft cover diaries",
      "Student report cards and ID cards",
      "Multi-page layout with images",
      "Gloss/matt lamination",
      "Perfect binding or stapled",
      "Custom logo and branding",
    ],
    packagingBoxes: [
      "Food-grade or laminated cardboards",
      "Custom die-cut and shape",
      "Branding with UV, foil, or embossing",
      "Types: Pizza/Burger/Sweet Boxes, Cosmetic/Corrugated/Pharma Boxes",
    ],
    paperBags: [
      "120–250 GSM kraft / art paper",
      "Rope or die-cut handles",
      "Foil or UV branding options",
      "Eco-friendly, strong, and stylish",
    ],
    weddingCards: [
      "300–600 GSM premium board",
      "Gold foil, embossing, or velvet lamination",
      "Matching envelopes available",
      "Custom shapes and luxurious finishes",
    ],
    diaries: [
      "Hard cover / soft cover / wiro bound",
      "Custom branding, embossing, and logo print",
      "Available in standard and executive sizes",
      "250 GSM cover with quality inner pages",
    ],
    calendars: [
      "Wall, desk, and pocket types",
      "250 GSM cover with 170 GSM inner pages",
      "Spiral or wire-o binding",
      "Personalized monthly design",
    ],
  };

  /* ----------------------- BUSINESS CARDS --------------------------- */
  const BusinessServices = [
    {
      image: "/assets/ServicesAssets/BusinessCard1.png",
      title: "MATTE LAMINATED BUSINESS CARDS (300 GSM)",
      points: [
        "300 GSM premium art card",
        "Matte lamination on both sides",
        "Standard 3.5 x 2 inches (custom available)",
        "Full color (CMYK) / spot color printing",
        "Add-ons: Embossing, Spot UV, Foiling",
      ],
      description:
        "Matte laminated cards offer a smooth, non-reflective surface that gives a luxurious and modern feel. The matte finish adds subtlety to colors and prevents glare, making text and logos appear crisp and professional.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard2.png",
      title: "GLOSS LAMINATED BUSINESS CARDS (300 GSM)",
      points: [
        "300 GSM high-quality art card",
        "Gloss lamination on both sides",
        "Full color printing with high saturation",
        "Standard & custom sizes available",
        "Add-ons: UV Spot, Rounded Corners",
      ],
      description:
        "Gloss finish cards are vibrant and attention-grabbing. The reflective coating enhances colors, making visuals pop and giving a polished look.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard3.png",
      title: "UNLAMINATED BUSINESS CARDS",
      points: [
        "280–300 GSM art board / craft texture",
        "Raw, natural, non-laminated finish",
        "Single or double-sided printing",
        "Add-ons: Spot UV, Emboss, Deboss",
      ],
      description:
        "Unlaminated cards provide a natural, organic texture that feels authentic and tactile — great for eco-friendly or creative brands.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard4.png",
      title: "TRUMP CARDS (NON-TEARABLE, WATER-RESISTANT)",
      points: [
        "180 Micron synthetic non-tearable sheet",
        "Thermal matte or gloss lamination",
        "Waterproof & fade-resistant",
        "High-resolution digital printing",
      ],
      description:
        "Durable non-tearable cards designed for rough use — waterproof, flexible, and long-lasting.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard5.png",
      title: "CLASSIC SPOT UV BUSINESS CARDS (300 GSM)",
      points: [
        "300 GSM matte art card",
        "Matte lamination + Spot UV (front)",
        "Full color CMYK printing",
        "Add-ons: Embossing, Metallic Foiling",
      ],
      description:
        "Spot UV highlights logos or text with a glossy shine on a matte background — elegant, minimal, and visually striking.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard6.png",
      title: "IMPORTED MATTE BUSINESS CARDS (370 GSM, DUAL-SPOT UV)",
      points: [
        "370 GSM imported premium matte card",
        "Double-side matte lamination",
        "UV Spot on both sides",
        "High-definition printing",
      ],
      description:
        "Thick, premium imported cards with dual-side UV spot detailing for a sophisticated and high-end finish.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard7.png",
      title: "GOLD / SILVER FOILING BUSINESS CARDS (370 GSM)",
      points: [
        "370 GSM matte laminated card",
        "Metallic foil stamping (gold/silver)",
        "CMYK + Foil overlay",
        "Options: Matte, Gloss, Velvet",
      ],
      description:
        "Luxurious cards with metallic foiling for a premium and standout appearance.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard8.png",
      title: "VELVET FINISH FOIL BUSINESS CARDS (370 GSM)",
      points: [
        "370 GSM thick art card",
        "Velvet soft-touch lamination",
        "Gold / Silver foil",
        "Non-reflective premium texture",
      ],
      description:
        "Soft-touch velvet cards combined with foil create a luxurious, premium experience.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard9.png",
      title: "TEXTURED BUSINESS CARDS WITH SPOT UV (320 GSM)",
      points: [
        "320 GSM imported textured stock",
        "Natural texture finish",
        "UV Spot gloss",
        "Metallic ink / emboss / deboss options",
        "Short-run printing available",
      ],
      description:
        "Premium textured cards with UV spot detailing — artistic and memorable with a handmade feel.",
    },
  ];

  /* ------------------------ FLYERS SECTION -------------------------- */
  const FlyersServices = [
    {
      image: "/assets/ServicesAssets/Flyer1.png",
      title: "90 GSM Flyers (1/8 Size)",
      points: [
        "90 GSM Maplitho or Art Paper",
        "1/8 A4 size (custom available)",
        "Single or double-sided full-color printing",
        "Matte or gloss finish",
        "Add-ons: Perforation or numbering",
      ],
      description:
        "Compact and economical flyers ideal for mass distribution, awareness campaigns, inserts, and quick promotions.",
    },
    {
      image: "/assets/ServicesAssets/Flyer2.png",
      title: "130 GSM Flyers (A4 Size)",
      points: [
        "130 GSM Gloss/Matte Art Paper",
        "A4 size (210 x 297 mm)",
        "High-definition CMYK printing",
        "Optional matte/gloss lamination",
        "Add-ons: Folding, Spot UV, Foiling",
      ],
      description:
        "Premium A4 flyers offering rich colors and high-quality prints, ideal for corporate promotions and detailed ads.",
    },
    {
      image: "/assets/ServicesAssets/Flyer3.png",
      title: "Advertisement Flyers",
      points: [
        "130–170 GSM Art Paper",
        "Single or double-sided printing",
        "Matte, gloss, or velvet finish",
        "UV coating & die-cutting options",
      ],
      description:
        "Designed for brand launches, retail promotions, real estate listings, events, and visually impactful marketing.",
    },
    {
      image: "/assets/ServicesAssets/Flyer4.png",
      title: "Sale & Discount Flyers",
      points: [
        "130 GSM Gloss Art Paper",
        "CMYK printing with bold typography",
        "Gloss finish for vibrancy",
        "Add-ons: QR code integration",
      ],
      description:
        "Perfect for seasonal offers, discounts, retail campaigns, and attention-grabbing promotional drives.",
    },
    {
      image: "/assets/ServicesAssets/Flyer5.png",
      title: "Promotional Flyers",
      points: [
        "130–170 GSM Premium Art Paper",
        "Sizes: A4, A5 or custom",
        "High-resolution CMYK printing",
        "Matte / Gloss / Spot UV",
        "Add-ons: Folding, creasing, die-cutting",
      ],
      description:
        "Custom-designed promotional flyers for gyms, corporates, healthcare, events, and service promotions.",
    },
    {
      image: "/assets/ServicesAssets/Flyer6.png",
      title: "Trifold Flyers",
      points: [
        "170 GSM Gloss/Matte Art Paper",
        "A4 trifold format",
        "Full-color double-sided printing",
        "Matte, gloss, or texture coating",
        "Options: Crease folding, Spot UV",
      ],
      description:
        "Organized, elegant trifold flyers ideal for menus, corporate profiles, events, and multi-section presentations.",
    },
  ];

  /* ---------------------- VOUCHERS --------------------- */
  const VoucherService = [
    {
      image: "/assets/ServicesAssets/Invoice3.png",
      title: "MULTICOLOUR RECEIPT BOOKS",
    },
    {
      image: "/assets/ServicesAssets/Invoice4.png",
      title: "COUNTER FOIL RECEIPT BOOKS",
    },
    { image: "/assets/ServicesAssets/Invoice5.png", title: "VOUCHER BOOKS" },
  ];

  /* ---------------------- CORPORATE SERVICES --------------------- */
  const CorporateServices = [
    {
      image: "/assets/ServicesAssets/Letter1.png",
      title: "100 GSM Excel Bond",
    },
    {
      image: "/assets/ServicesAssets/Letter2.png",
      title: "100 GSM Imported Paper",
    },
    { image: "/assets/ServicesAssets/Letter3.png", title: "Gold Foil" },
    {
      image: "/assets/ServicesAssets/Letter4.png",
      title: "Letter & Logo Embossing",
    },

    {
      image: "/assets/ServicesAssets/Envelope1.png",
      title: "100 GSM - Bond (4 x 10)",
    },
    {
      image: "/assets/ServicesAssets/Envelope2.png",
      title: "90 GSM - Maplitho (5 x 10)",
    },
    {
      image: "/assets/ServicesAssets/Envelope3.png",
      title: "100 / 120 GSM - Maplitho (9 x 12)",
    },
    {
      image: "/assets/ServicesAssets/Envelope4.png",
      title: "Window Envelope Standard & Custom Size",
    },

    { image: "/assets/ServicesAssets/Corporate1.png", title: "Gift Bags" },
    { image: "/assets/ServicesAssets/Corporate3.png", title: "Caps" },
    { image: "/assets/ServicesAssets/Corporate4.png", title: "Fridge Magnets" },
    { image: "/assets/ServicesAssets/Corporate5.png", title: "Keychains" },
    { image: "/assets/ServicesAssets/Corporate6.png", title: "Sipper Bottles" },
    { image: "/assets/ServicesAssets/Corporate7.png", title: "Mugs" },

    {
      image: "/assets/ServicesAssets/Diary1.png",
      title: "Wiro Diary (Hard Cover)",
    },
    {
      image: "/assets/ServicesAssets/Diary2.png",
      title: "Wiro Diary (Regular)",
    },
    { image: "/assets/ServicesAssets/Diary3.png", title: "Hard Cover Diaries" },
    { image: "/assets/ServicesAssets/Diary4.png", title: "PU Cover Diaries" },
    { image: "/assets/ServicesAssets/Diary5.png", title: "PU Cover Diaries" },

    { image: "/assets/ServicesAssets/School1.png", title: "SCHOOL DIARY" },
    { image: "/assets/ServicesAssets/School2.png", title: "SCHOOL DIARY" },
    { image: "/assets/ServicesAssets/School3.png", title: "PROGRESS REPORT" },
    {
      image: "/assets/ServicesAssets/School4.png",
      title: "PROMOTIONAL FLYERS",
    },
    {
      image: "/assets/ServicesAssets/School5.png",
      title: "PROMOTIONAL FLYERS",
    },

    { image: "/assets/ServicesAssets/Calendar1.png", title: "Wall Calendar" },
    { image: "/assets/ServicesAssets/Calendar2.png", title: "Table Calendar" },
    { image: "/assets/ServicesAssets/Calendar3.png", title: "Table Calendar" },
  ];

  /* ---------------------- WEDDING --------------------- */
  const WeddingService = [
    { image: "/assets/ServicesAssets/Wedding1.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding2.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding3.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding4.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding5.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding6.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding7.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding8.jpg", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding9.png", title: "Wedding Cards" },
  ];

  /* ---------------------- PACKAGING --------------------- */
  const PackagingService = [
    { image: "/assets/ServicesAssets/Sticker1.png", title: "Bottle Sticker" },
    {
      image: "/assets/ServicesAssets/Sticker2.png",
      title: "Water Proof PVC Sticker",
    },
    {
      image: "/assets/ServicesAssets/Sticker3.png",
      title: "Custom Shape Bottle Label",
    },
    {
      image: "/assets/ServicesAssets/Sticker4.png",
      title: "Transparent PVC Sticker",
    },
    { image: "/assets/ServicesAssets/Sticker5.png", title: "Die Cut Sticker" },
    {
      image: "/assets/ServicesAssets/Sticker6.png",
      title: "Rectangular Bottle Label",
    },
    { image: "/assets/ServicesAssets/Box1.png", title: "Burger Boxes" },
    { image: "/assets/ServicesAssets/Box2.png", title: "Sandwich Boxes" },
    { image: "/assets/ServicesAssets/Box3.png", title: "Pizza Boxes" },
    { image: "/assets/ServicesAssets/Box4.png", title: "Sweet Boxes" },
    { image: "/assets/ServicesAssets/Box5.png", title: "Pharma Boxes" },
    { image: "/assets/ServicesAssets/Box6.png", title: "Cosmetic Boxes" },
    { image: "/assets/ServicesAssets/Bag1.png", title: "Paper Bags" },
    { image: "/assets/ServicesAssets/Bag2.png", title: "Paper Bags" },
    { image: "/assets/ServicesAssets/Bag3.png", title: "Paper Bags" },
    { image: "/assets/ServicesAssets/Bag4.png", title: "Paper Bags" },
  ];

  /* ==================================================================== */

  return (
    <section>
      {/* --------- HEADER --------- */}
      <div className="bg-[#f8fcff] shadow-lg shadow-black/10 ">
        <div className="relative overflow-hidden bg-redShade py-4">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-redShade to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-redShade to-transparent z-10" />

          <div className="flex whitespace-nowrap animate-scroll-right">
            {Array.from({ length: 52 }).map((_, i) => (
              <img key={i} src="/FooterLogo.svg" className="mx-8 opacity-90" />
            ))}
          </div>
        </div>

        <div className="mx-auto lg:px-19 pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-y-3.5 md:w-1/3 px-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              OUR{" "}
              <span className="bg-black text-white font-bold px-3 py-1">
                SERVICES
              </span>
            </h2>
            <p>
              <b>We offer</b> a full range of <b>professional</b> printing
              services for businesses, corporates, schools, and restaurants.
            </p>
          </div>

          <div className="md:w-2/3">
            <img
              src="/AboutIllustration.svg"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ---------------- CORPORATE & BUSINESS STATIONERY ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          <span className="font-bold text-redShade">CORPORATE & BUSINESS</span>{" "}
          STATIONERY
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="mt-8 w-full px-4">
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Your first impression deserves perfection. Our premium corporate
            stationery is crafted using the finest paper stocks and advanced
            in-house printing technology to reflect your brand identity with
            sophistication.
          </p>
        </div>

        {/* Premium Visiting Cards */}
        <div className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                PREMIUM VISITING CARDS
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Make your first impression last with our premium range of visiting
              cards — designed to reflect your brand identity and professionalism.
              Crafted using high-end materials and advanced printing technology
              to deliver sharp details and luxurious finishes.
            </p>

            {/* Highlights Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.visitingCards.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {BusinessServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-20 mx-auto object-contain mb-3"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Letterheads */}
        <div className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                LETTERHEADS
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Official communication that speaks volumes about your professionalism.
              Our custom-printed letterheads are crafted with precision alignment,
              strong brand consistency, and premium paper quality to create a lasting impression.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.letterheads.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Letterhead Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {CorporateServices.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Envelopes */}
        <div className="w-full py-4 px-2 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                ENVELOPES
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Tailored envelopes that complement your brand identity. From standard
              business envelopes to creative custom sizes, each piece is manufactured
              in-house to ensure premium quality, precision printing, and refined elegance.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.envelopes.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Envelope Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {CorporateServices.slice(4, 8).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Corporate Gifts & Merchandise */}
        <div className="w-full py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                CORPORATE GIFTS & MERCHANDISE
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Enhance your brand presence with premium custom corporate merchandise —
              thoughtfully designed, branded, and manufactured in-house to reflect
              quality, creativity, and professionalism.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.corporateGifts.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Merchandise Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {CorporateServices.slice(8, 14).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-28 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Diaries */}
        <div className="w-full py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                DIARIES
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Custom-branded diaries crafted with premium materials, designed for
              functionality and refined elegance — perfect for corporate gifting and
              professional use.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.diaries.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diaries Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {CorporateServices.slice(14, 19).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Educational Printing */}
        <div className="w-full py-4 px-4 bg-gradient-to-br from-blue-50 to-gray-100">

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                EDUCATIONAL PRINTING
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Customized school and college stationery designed to reflect your
              institution's brand identity, professionalism, and discipline —
              printed with precision and premium materials.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.educational.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {CorporateServices.slice(19, 24).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-44 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Calendars */}
        <div className="w-full py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                CALENDARS
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Keep your brand visible all year round with custom desk and wall calendars —
              professionally designed and printed with premium finishes.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.calendars.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendar Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CorporateServices.slice(24).map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 mx-auto object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-800 text-base">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* Vouchers & Bill Books */}
        <div className="w-full py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-200">

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
                VOUCHERS & BILL BOOKS
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              Professionally printed multi-copy bill books and vouchers designed for
              precision, brand consistency, and long-term durability — perfect for
              businesses of all sizes.
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
                HIGHLIGHTS
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceHighlights.billBooks.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mt-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Voucher Showcase */}
            <div className="flex flex-wrap justify-center gap-8">
              {VoucherService.map((voucher, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center w-64"
                >
                  <img
                    src={voucher.image}
                    alt={voucher.title}
                    className="h-44 mx-auto object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {voucher.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* ---------------- MARKETING & PROMOTIONAL PRINTS ---------------- */}
      <div className="w-full flex flex-col items-center py-4 bg-gradient-to-b from-gray-100 to-white">

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-800">
            <span className="font-bold text-redShade">
              MARKETING & PROMOTIONAL
            </span>{" "}
            PRINTS
          </h1>
          <div className="w-24 h-1 bg-redShade mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mt-6 w-full px-4">
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your brand story into a visual journey. Our marketing materials
            are printed with impeccable detail, premium paper, and accurate
            color reproduction for unmatched quality.
          </p>
        </div>

        {/* Flyers Section */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6">
            FLYERS & LEAFLETS
          </h2>

          <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Spread your message effectively with vibrant, high-quality flyers
            designed to attract attention and convert interest into action.
            Perfect for events, promotions, and product launches.
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-10">
            <h3 className="text-lg font-semibold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {serviceHighlights.flyers.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {FlyersServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={service.image}
                  className="h-40 object-contain mx-auto transition duration-300 group-hover:scale-105"
                />
                <h3 className="font-medium mt-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Brochures Section */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6">
            BROCHURES & CATALOGUES
          </h2>

          <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Showcase your products or services in style. Our brochures and
            catalogues combine creative design, premium printing, and
            professional finishing.
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-10">
            <h3 className="text-lg font-semibold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {serviceHighlights.brochures.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { img: "/assets/BrochureCatalogue17.png", title: "A4 Brochures" },
              { img: "/assets/BrochureCatalogue10.jpg", title: "A5 Catalogues" },
              { img: "/assets/BrochureCatalogue2.png", title: "Trifold Brochures" },
              { img: "/assets/BrochureCatalogue9.jpg", title: "Product Catalogues" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={item.img}
                  className="h-40 object-contain mx-auto transition duration-300 group-hover:scale-105"
                />
                <h3 className="font-medium mt-4 text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stickers Section */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6">
            STICKERS & LABELS
          </h2>

          <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Custom stickers and labels for packaging, branding, and product
            promotion. Designed for durability and aesthetics.
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-10">
            <h3 className="text-lg font-semibold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {serviceHighlights.stickers.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {PackagingService.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={service.image}
                  className="h-32 object-contain mx-auto transition duration-300 group-hover:scale-105"
                />
                <h3 className="font-medium mt-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>



      {/* ---------------- PACKAGING & PRODUCT BRANDING ---------------- */}
      <div className="w-full flex flex-col items-center py-6 bg-gradient-to-b from-white to-gray-50">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-800">
            <span className="font-bold text-redShade">PACKAGING & PRODUCT</span>{" "}
            BRANDING
          </h1>
          <div className="w-24 h-1 bg-redShade mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mt-4 w-full px-4">
          <p className="text-lg text-center text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
            Durable and detailed packaging solutions printed in custom shapes
            and finishes. Perfect for branding, packaging, and promotions.
          </p>
        </div>

        {/* ================= BOXES ================= */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-4">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6">
            PACKAGING BOXES
          </h2>

          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Durable, custom-printed boxes made to match your product's style and
            function — from food to pharma.
          </p>

          {/* Highlights */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-12">
            <h3 className="text-lg font-semibold text-redShade mb-6">
              HIGHLIGHTS:
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {serviceHighlights.packagingBoxes.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {PackagingService.slice(6, 12).map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={service.image}
                  className="h-32 object-contain mx-auto transition duration-300 group-hover:scale-105"
                />
                <h3 className="font-medium mt-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PAPER BAGS ================= */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6">
            PAPER BAGS
          </h2>

          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Eco-friendly, strong, and stylish paper bags printed in your brand's
            theme.
          </p>

          {/* Highlights */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mb-12">
            <h3 className="text-lg font-semibold text-redShade mb-6">
              HIGHLIGHTS:
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {serviceHighlights.paperBags.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PackagingService.slice(12).map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
              >
                <img
                  src={service.image}
                  className="h-44 object-contain mx-auto transition duration-300 group-hover:scale-105"
                />
                <h3 className="font-medium mt-4 text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* ---------------- SPECIAL PRINTING ---------------- */}
      <div className="w-full flex flex-col items-center px-6 md:px-10 py-8 bg-gradient-to-b from-[#f9f6f2] to-[#eeeeee]">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-800">
            <span className="font-bold text-redShade">SPECIAL</span> PRINTING
          </h1>
          <div className="w-24 h-1 bg-redShade mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="mt-4 w-full px-4">
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Elegant invitation cards designed with artistry and printed with
            perfection — because special occasions deserve extraordinary prints.
          </p>
        </div>

        {/* Wedding Cards Container */}
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

          <h2 className="text-2xl md:text-3xl font-semibold text-redShade text-center mb-6 tracking-wide">
            WEDDING & INVITATION CARDS
          </h2>

          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Because special occasions deserve extraordinary prints. Elegant
            invitation cards designed with artistry and printed with perfection.
          </p>

          {/* Highlights Box */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm mb-14">
            <h3 className="text-lg font-semibold text-redShade mb-6 tracking-wide">
              HIGHLIGHTS:
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {serviceHighlights.weddingCards.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-redShade mt-2 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {WeddingService.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    className="h-48 object-contain mx-auto transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-medium mt-4 text-gray-800 tracking-wide">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>


      <CTA />

      
    </section>
  );
}
