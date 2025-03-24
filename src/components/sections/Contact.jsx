import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import QRCode from "react-qr-code";

const iconClass = "text-gray-400";

export const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Error! Please try again.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="text-center space-y-4 mb-8">
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:+905462522923"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-105 group"
              >
                <FaPhoneAlt className="text-blue-500 group-hover:animate-pulse" />
                <span className="hover:underline">+90 546 252 29 23</span>
              </a>
              
              <div className="flex flex-col md:hidden lg:hidden xl:hidden gap-6 my-6 items-center">
                <div className="flex flex-col items-center space-y-2">
                  <QRCode value="https://github.com/fsevindik" size={140} className="bg-white p-2 rounded" />
                  <span className="text-xs mt-2 text-gray-400 flex items-center gap-1">
                    <FaGithub className={iconClass} /> GitHub
                  </span>
                  <span className="text-xs text-gray-500">Scan to visit</span>
                </div>

                <hr className="border-gray-500 w-24 my-4" />

                <div className="flex flex-col items-center space-y-2">
                  <QRCode
                    value="https://www.linkedin.com/in/f%C4%B1rat-sevindik-7660a8282/"
                    size={140}
                    className="bg-white p-2 rounded"
                  />
                  <span className="text-xs mt-2 text-gray-400 flex items-center gap-1">
                    <FaLinkedin className={iconClass} /> LinkedIn
                  </span>
                  <span className="text-xs text-gray-500">Scan to visit</span>
                </div>
              </div>

              <div className="flex gap-2 border border-gray-700 rounded-sm">
                <a
                  href="https://flowcv.com/resume/5nf5chplhr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-200 hover:text-gray-900 hover:bg-gray-300 hover:animate-none transition-all duration-300 hover:scale-105 group animate-pulse px-3 py-1 rounded-sm"
                >
                  <FaEye className="text-gray-200 group-hover:text-gray-900 transition-colors duration-300" />
                  <span className="text-xs md:text-sm lg:text-md">View CV</span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
