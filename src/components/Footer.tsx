import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-2 fixed bottom-0 w-full z-50 bg-gradient-to-r from-black via-red-900 to-black shadow-md border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-xs">
        <div className="mb-1 md:mb-0 text-center md:text-left">
          © {currentYear} Gordons Bay Security Trust. All rights reserved.
        </div>
        <div className="flex space-x-3 text-sm mb-1 md:mb-0">
          <a
            href="https://www.facebook.com/GBSEC.GBMedRescue/"
            className="hover:text-yellow-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="text-lg" />
          </a>
          <a
            href="https://www.youtube.com/@gordonsbaysecurityandmedic5978"
            className="hover:text-yellow-500 transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="text-lg" />
          </a>
        </div>
        <div className="text-center md:text-right text-xs">
          Contact Us: <a href="tel:0218560214" className="hover:underline">021 856 0214</a>
        </div>
      </div>
      <div className="text-center py-1 text-xs border-t border-stone-300">
        Design by <a href="https://www.shikkidesign.co.za/" className="hover:underline text-yellow-500">Shikki Design</a>
      </div>
    </footer>
  );
};

export default Footer;
