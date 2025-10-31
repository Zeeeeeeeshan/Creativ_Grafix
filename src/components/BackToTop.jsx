import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // you can use any icon library
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
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
    window.open("https://wa.me/6350511150", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>

      {/* Back to Top Button (visible after scroll) */}
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
