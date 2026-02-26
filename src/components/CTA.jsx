export default function CTA() {

  const openWhatsApp = () => {
    window.open("https://wa.me/9100011660", "_blank");
  };

  return (
    <div className="bg-white py-20 px-6 border-t border-gray-200">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
          READY TO <span className="text-red-600">PRINT YOUR IDEAS?</span>
        </h3>

        {/* Divider */}
        <div className="w-20 h-1 bg-red-600 mx-auto mt-5 mb-8 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-12 leading-relaxed">
          Get a free consultation and quotation for your printing requirements today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* Download Button */}
          <a
            href="/ProductCatalogue1.pdf"
            download
            className="px-8 py-3 rounded-lg border border-gray-300 
                       text-gray-800 font-semibold
                       transition-all duration-300
                       hover:border-red-600 hover:text-red-600 hover:shadow-md"
          >
            Download Catalogue
          </a>

          {/* Order Button */}
          <button
            onClick={openWhatsApp}
            className="px-8 py-3 rounded-lg 
                       bg-red-600 text-white font-semibold
                       transition-all duration-300
                       hover:bg-red-700 hover:shadow-lg hover:-translate-y-1"
          >
            Order Now Here
          </button>

        </div>

      </div>
    </div>
  );
}
