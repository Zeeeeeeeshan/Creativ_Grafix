export default function CTA() {
  return (
    <div className="bg-white text-center py-16 px-6 border-t border-redShade">
      <h3 className="text-2xl md:text-3xl mb-4">
        READY TO{" "}
        <span className="text-redShade font-bold">PRINT YOUR IDEAS?</span>
      </h3>
      <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-6"></div>
      <p className="text-black mb-8 text-sm md:text-base">
        Get a free consultation and quotation for your printing requirements
        today.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/ProductCatalogue1.pdf"
          download={true}
          className="border border-gray-400 text-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          DOWNLOAD PRODUCT CATALOGUE
        </a>
        <button className="bg-redShade text-white px-6 py-2 rounded hover:bg-red-700 transition">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
