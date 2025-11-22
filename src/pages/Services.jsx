import CTA from "../components/CTA";

export default function Services() {
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
        <div className="w-full flex flex-col items-center py-8 bg-[#eeeeee] rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            PREMIUM VISITING CARDS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Make your first impression last with our premium range of visiting
            cards — designed to reflect your brand identity and professionalism.
            Each card is crafted using the finest materials and high-end
            in-house printing technology to deliver sharp details and luxurious
            finishes.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.visitingCards.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {BusinessServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className=" object-contain" />
                <h3 className="font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Letterheads */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            LETTERHEADS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Official communication that speaks volumes about your
            professionalism. Our custom-printed letterheads are designed with
            precision alignment, brand consistency, and premium paper quality to
            leave a lasting impression.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.letterheads.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Envelopes */}
        <div className="w-full flex flex-col items-center py-8 bg-[#eeeeee] rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            ENVELOPES
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Tailored envelopes that complement your brand identity. From
            standard business envelopes to custom-sized creative ones, we
            manufacture every piece in-house to ensure accuracy, print quality,
            and elegance.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.envelopes.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(4, 8).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Gifts & Merchandise */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            CORPORATE GIFTS & MERCHANDISE
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Enhance your brand presence with custom corporate merchandise — all
            designed and branded in-house.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.corporateGifts.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(8, 14).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-32 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Diaries */}
        <div className="w-full flex flex-col items-center py-8 bg-[#eeeeee] rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            DIARIES
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Custom-branded diaries made with premium materials and designed for
            functionality and elegance.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.diaries.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(14, 19).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Printing */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            EDUCATIONAL PRINTING
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Customized school and college stationery that reflects your
            institution's brand and discipline.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.educational.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(19, 24).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Calendars */}
        <div className="w-full flex flex-col items-center py-8 bg-[#eeeeee] rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            CALENDARS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Keep your brand visible all year round with custom desk and wall
            calendars.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.calendars.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-full max-w-6xl">
            {CorporateServices.slice(24).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-56 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Vouchers & Bill Books */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            VOUCHERS & BILL BOOKS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Professionally printed multi-copy bill books and vouchers designed
            for accuracy, branding, and durability.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.billBooks.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-12 mt-4 w-full max-w-6xl">
            {VoucherService.map((voucher, index) => (
              <div key={index} className="text-center">
                <img src={voucher.image} className="h-48 object-contain" />
                <h2 className="text-xl font-bold mt-2">{voucher.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MARKETING & PROMOTIONAL PRINTS ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          <span className="font-bold text-redShade">
            MARKETING & PROMOTIONAL
          </span>{" "}
          PRINTS
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="mt-8 w-full px-4">
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Turn your brand story into a visual journey. Our marketing materials
            are printed with impeccable detail, premium paper, and accurate
            color reproduction for unmatched quality.
          </p>
        </div>

        {/* Flyers */}
        <div className="w-full flex flex-col items-center py-8 bg-white rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            FLYERS & LEAFLETS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Spread your message effectively with vibrant, high-quality flyers
            designed to attract attention and convert interest into action.
            Perfect for events, promotions, and product launches.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.flyers.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {FlyersServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Brochures & Catalogues */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            BROCHURES & CATALOGUES
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Showcase your products or services in style. Our brochures and
            catalogues combine creative design, premium printing, and
            professional finishing.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.brochures.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 w-full max-w-6xl">
            {/* Placeholder for brochure images - you can add actual images here */}
            <div className="flex flex-col text-center">
              <div className="">
                <img src="/assets/BrochureCatalogue17.png" alt="" className="h-40"/>
              </div>
              <h3 className=" font-medium">A4 Brochures</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div>
                <img src="/assets/BrochureCatalogue10.jpg" alt="" className="h-40"/>
              </div>
              <h3 className=" font-medium">A5 Catalogues</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="">
                <img src="/assets/BrochureCatalogue2.png" alt="" className="h-40"/>
              </div>
              <h3 className=" font-medium">Trifold Brochures</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="">
                <img src="/assets/BrochureCatalogue9.jpg" alt="" className="h-40"/>
              </div>
              <h3 className=" font-medium">Product Catalogues</h3>
            </div>
          </div>
        </div>

        {/* Stickers & Labels */}
        <div className="w-full flex flex-col items-center py-8 bg-white rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            STICKERS & LABELS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Custom stickers and labels for packaging, branding, and product
            promotion. Designed for durability and aesthetics.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.stickers.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {PackagingService.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-32 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- PACKAGING & PRODUCT BRANDING ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          <span className="font-bold text-redShade">PACKAGING & PRODUCT</span>{" "}
          BRANDING
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="mt-8 w-full px-4">
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Durable and detailed packaging solutions printed in custom shapes
            and finishes. Perfect for branding, packaging, and promotions.
          </p>
        </div>

        {/* Boxes */}
        <div className="w-full flex flex-col items-center py-8 bg-[#eeeeee] rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            PACKAGING BOXES
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Durable, custom-printed boxes made to match your product's style and
            function — from food to pharma.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.packagingBoxes.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {PackagingService.slice(6, 12).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-32 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Paper Bags */}
        <div className="w-full flex flex-col items-center py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            PAPER BAGS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Eco-friendly, strong, and stylish paper bags printed in your brand's
            theme.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.paperBags.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full max-w-6xl">
            {PackagingService.slice(12).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SPECIAL PRINTING ---------------- */}
      <div className="w-full flex flex-col items-center px-8 py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          <span className="font-bold text-redShade">SPECIAL</span> PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="mt-8 w-full px-4">
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Elegant invitation cards designed with artistry and printed with
            perfection — because special occasions deserve extraordinary prints.
          </p>
        </div>

        {/* Wedding Cards */}
        <div className="w-full flex flex-col items-center py-8 bg-white rounded-lg px-4">
          <h2 className="text-xl md:text-2xl font-bold text-redShade mb-6">
            WEDDING & INVITATION CARDS
          </h2>
          <p className="text-lg text-center mb-6 max-w-4xl mx-auto">
            Because special occasions deserve extraordinary prints. Elegant
            invitation cards designed with artistry and printed with perfection.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 max-w-4xl w-full">
            <h3 className="text-lg font-bold text-redShade mb-4">
              HIGHLIGHTS:
            </h3>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceHighlights.weddingCards.map((highlight, index) => (
                <li key={index} className="text-gray-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 w-full max-w-6xl">
            {WeddingService.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={service.image} className="h-48 object-contain" />
                <h3 className=" font-medium mt-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
}
