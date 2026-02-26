import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  // Show Back-to-top button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp redirect
  const openWhatsApp = () => {
    window.open("https://wa.me/9100011660", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 items-end">
      {/* WhatsApp Button with permanent label */}
      <div className="flex flex-col items-end">
        {/* Text above icon */}
        <span className="mb-1 bg-redShade text-white text-sm font-medium px-3 py-1 rounded-full shadow-md animate-fadeIn">
          Get a Quote
        </span>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </button>
      </div>

      {/* Back to Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
