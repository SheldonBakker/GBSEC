import React from "react";
import { FaPhoneAlt, FaShieldAlt, FaFileAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-black via-red-900 to-black text-white py-5 shadow-md border-t border-gray-600 z-50 flex flex-col md:flex-row md:justify-between items-center px-6 lg:px-12">
      {/* Left Section: Copyright */}
      <div className="flex items-center mb-3 md:mb-0 text-center md:text-left text-xs md:text-sm font-light tracking-wide">
        &copy; {currentYear} Gordons Bay Security Trust. All rights reserved.
      </div>

      {/* Center Section: Logos (hidden on mobile and tablet) */}
      <div className="hidden lg:flex justify-center space-x-4 sm:space-x-6 mb-3 md:mb-0">
        {[
          {
            link: "/",
            src: "/images/logos/GBSEC.png",
            alt: "Gordons Bay Security",
          },
          {
            link: "/gbmed",
            src: "/images/logos/GBSECMED.png",
            alt: "Gordons Bay Medical",
          },
          {
            link: "/academy",
            src: "/images/logos/Academy.png",
            alt: "Gordons Bay Academy",
          },
          {
            link: "/gunshop/shooting-range",
            src: "/images/logos/GBGUN.png",
            alt: "Gordons Bay Gun Shop",
          },
          {
            link: "/special-op",
            src: "/images/logos/GBSOU.png",
            alt: "Special Operations",
          },
          {
            link: "/internet",
            src: "/images/logos/Connect.png",
            alt: "Gordons Bay Connect",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="transition-transform transform hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        ))}
      </div>

      {/* Right Section: Contact and Links with Icons */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs md:text-sm font-light tracking-wide">
        <div className="flex items-center">
          <FaPhoneAlt className="mr-2 text-yellow-300" />
          <p>Contact Us: 021 856 0214</p>
        </div>
        <a
          href="/privacy-policy"
          className="flex items-center hover:underline text-yellow-300"
        >
          <FaShieldAlt className="mr-2" />
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          className="flex items-center hover:underline text-yellow-300"
        >
          <FaFileAlt className="mr-2" />
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
