import { useEffect, useState } from "react";
import CTA from "../components/CTA";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "New Contact Form Submission";

    const body = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Message: ${formData.message}
    `;

    window.location.href =
      "mailto:habeeb516@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <section>
      {/* HEADER */}
      <div className="bg-[#f8fcff] shadow-lg shadow-black/10">
        <div className="mx-auto pt-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">

          <div className="flex flex-col gap-y-3.5 md:w-1/3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-nowrap">
              <span className="bg-black font-bold text-white px-3 py-1">
                CONTACT
              </span>{" "}
              <span>US</span>
            </h2>
          </div>

          <div className="md:w-2/3">
            <img
              src="/AboutIllustration.svg"
              alt="About Illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in <span className="text-redShade">Touch</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              We're here to answer any questions you may have. Reach out to us and
              we’ll respond as soon as we can.
            </p>

            <div className="space-y-5 text-gray-700">
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>
                  Redhills, Opp. Rupani Apartments <br />
                  Hyderabad, Telangana - 500004
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+91 9392227180</p>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <p>logoncreative@gmail.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-redShade outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-redShade outline-none"
              />

              <input
                name="mobile"
                type="text"
                placeholder="Enter Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-redShade outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-redShade outline-none"
              ></textarea>



              <button
                className="bg-redShade text-white py-3 rounded-lg font-medium hover:scale-[1.02] transition duration-300"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=logoncreative@gmail.com&su=New Contact Form&body=Hello",
                    "_blank"
                  )
                }
              >
                Send via Gmail
              </button>

            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full mt-5 bg-white rounded-3xl shadow-2xl p-3 border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2151177666588!2d78.46384809999999!3d17.4014611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9761623840cd%3A0x34a89758af240325!2sRupani%20Apartments!5e0!3m2!1sen!2sin!4v1771672488622!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <CTA />
    </section>
  );
}