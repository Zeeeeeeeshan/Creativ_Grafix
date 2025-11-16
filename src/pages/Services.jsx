import CTA from "../components/CTA";

export default function Services() {
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
    {
      image: "/assets/ServicesAssets/BusinessCard7.png",
      title: "DOUBLE PASTING PREMIUM CARDS (600 GSM)",
      points: [
        "600 GSM double-pasted board",
        "Matte lamination",
        "UV Spot",
        "Grain or linen texture available",
        "Add-ons: Edge painting, Emboss, Foil",
      ],
      description:
        "Ultra-thick premium cards that deliver exceptional strength, elegance, and a statement of authority.",
    },
    {
      image: "/assets/ServicesAssets/BusinessCard9.png",
      title: "CUSTOM SHAPE BUSINESS CARDS (350 GSM)",
      points: [
        "350 GSM matte or gloss card",
        "Smooth lamination",
        "Custom die-cut shapes",
        "Add-ons: Foil, Spot UV, Emboss",
      ],
      description:
        "Unique die-cut business cards that reflect your brand identity and leave a memorable impression.",
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

  /* ---------------------- CORPORATE SERVICES (Flyers removed) --------------------- */
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
  ];

  /* ---------------------- WEDDING --------------------- */
  const WeddingService = [
    { image: "/assets/ServicesAssets/Wedding1.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding2.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding3.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding4.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding1.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding2.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding3.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding4.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding1.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding2.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding3.png", title: "Wedding Cards" },
    { image: "/assets/ServicesAssets/Wedding4.png", title: "Wedding Cards" },
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

      {/* ---------------- BUSINESS SERVICES ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">BUSINESS</span> PRINTING
          SERVICES
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div id="business-card" className="flex flex-col gap-y-8 mt-10 w-full">
          {BusinessServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center items-center w-full gap-10"
            >
              <img src={service.image} className="h-56" />
              <div className="md:w-4/5 flex flex-col gap-y-2 items-start">
                <h1 className="text-xl md:text-2xl text-redShade font-bold">
                  {service.title}
                </h1>

                <ul className="list-disc md:text-lg font-semibold">
                  {service.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <p className="font-medium">"{service.description}"</p>
              </div>
            </div>
          ))}

          {/* Voucher Section */}
          <div className="w-full flex flex-wrap items-center justify-center gap-12 mt-8">
            {VoucherService.map((voucher, index) => (
              <div key={index} className="text-center">
                <img src={voucher.image} />
                <h2 className="text-xl font-bold">{voucher.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- FLYERS SECTION (NEW) ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">FLYERS</span> PRINTING
          SERVICES
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="flex flex-col gap-y-8 mt-10 w-full">
          {FlyersServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center items-center w-full gap-10"
            >
              <img src={service.image} className="h-56" />

              <div className="md:w-4/5 flex flex-col items-start gap-y-2">
                <h1 className="text-xl md:text-2xl text-redShade font-bold">
                  {service.title}
                </h1>

                <ul className="list-disc md:text-lg font-semibold">
                  {service.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <p className="font-medium">"{service.description}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- PACKAGING ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-[#eeeeee]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">PACKAGING</span> & BRANDING
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 w-full">
          {PackagingService.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img src={service.image} className="h-56" />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- CORPORATE ---------------- */}
      <div className="w-full flex flex-col items-center py-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">CORPORATE</span> &
          EDUCATIONAL PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 w-full">
          {CorporateServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img src={service.image} className="h-56" />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- WEDDING ---------------- */}
      <div className="w-full flex flex-col items-center px-8 py-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold text-redShade">SPECIAL</span> PRINTING
        </h1>
        <span className="border-2 w-1/12 mt-4" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 w-full">
          {WeddingService.map((service, index) => (
            <div key={index}>
              <img src={service.image} className="h-48" />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  );
}
