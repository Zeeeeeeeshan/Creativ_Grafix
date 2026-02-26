import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-400 font-montserrat">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <img
            src="/FooterLogo.svg"
            alt="Creativ Grafix Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm leading-relaxed">
            We transform ideas into print. Whether you need visiting cards,
            flyers, brochures, packaging boxes, or custom corporate gifts, we
            deliver high-quality, affordable printing solutions in Hyderabad
            with quick turnaround times.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="hidden md:block">
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Business Cards
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Brochures & Flyers
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                File & Diaries
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Packaging Boxes
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-redShade group transition">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                Design Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">
            Address
          </h3>

          <ul className="space-y-5 text-sm">

           

            {/* Address */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-redShade mt-1" />
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Redhills+Opp+Rupani+Apartments+Hyderabad+Telangana+500004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-redShade transition font-bold"
                >
                  Redhills, Opp. Rupani Apartments
                  <br />
                  Hyderabad, Telangana - 500004
                </a>

                {/* Highlight Time Box */}
                {/* Highlight Time Box */}
                <div className="mt-3 inline-block bg-[#2a2a2a] border border-redShade/40 px-4 py-2 rounded-lg">
                  <p className="text-white font-semibold text-sm blink-soft">
                    10:30 AM to 08:30 PM
                  </p>
                  <p className="text-gray-400 text-xs">
                    Monday to Saturday
                  </p>
                </div>

              </div>
            </li>
             {/* Email */}
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-redShade" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=logoncreative@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-redShade transition"
              >
                logoncreative@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-redShade" />
              <a
                href="https://wa.me/919392227180"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-redShade transition"
              >
                +91 9392227180
              </a>
            </li>

          </ul>
        </div>


      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-0 py-8 text-sm">
          <p>
            © {new Date().getFullYear()} Creativ Grafix. All rights reserved.
          </p>

          <div className="flex items-center gap-6 mt-3 sm:mt-0">
            <Link to="/contact" className="hover:text-redShade transition">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-redShade transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
