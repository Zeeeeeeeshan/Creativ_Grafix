import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-400 font-montserrat">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Logo + About */}
        <div className="md:w-1/3">
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
          <h3 className="text-redShade font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm list-disc ml-7">
            <li>
              <Link to="/" className="hover:text-redShade">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-redShade">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-redShade">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-redShade">
                Our Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-redShade">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="hidden md:block">
          <h3 className="text-redShade font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm list-disc ml-7">
            <li>Business Cards</li>
            <li>Brochures & Flyers</li>
            <li>File & Diaries</li>
            <li>Packaging Boxes</li>
            <li>Design Services</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-redShade font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <img src="/FooterMail.svg" alt="mail" className="w-4 h-4" />
              logoncreative@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <img src="/FooterPhone.svg" alt="phone" className="w-4 h-4" />
              +91 9392227180
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/FooterLocation.svg"
                alt="location"
                className="w-4 h-4 mt-1"
              />
              Redhills, Opp. Rupani Apartments
              <br />
              Hyderabad, Telangana - 500004
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-0 py-8 text-sm">
          <p>© 2024 Creativ Grafix. All rights reserved.</p>

          <div className="flex items-center gap-6 mt-3 sm:mt-0">
            <Link
              to="/privacy"
              className="flex items-center gap-2 hover:text-red-500"
            >
              <img src="/FooterPrivacy.svg" alt="privacy" className="w-4 h-4" />
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="flex items-center gap-2 hover:text-red-500"
            >
              <img src="/FooterTerms.svg" alt="terms" className="w-4 h-4" />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
