import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Import your Supabase client
import "./Navbar.css"; // Assuming you may want to keep some custom styles, else migrate to Tailwind completely
import Logo from "./assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error checking session:", error);
        return;
      }
      setIsLoggedIn(!!data.session);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoginLogout = async () => {
    if (isLoggedIn) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
      } else {
        setIsLoggedIn(false);
        console.log("Logged out successfully");
        setIsOpen(false); // Close the menu on logout
        navigate("/");
      }
    } else {
      setIsOpen(false); // Close the menu on login
      navigate("/login");
    }
  };

  // Memoize the links to avoid unnecessary re-renders
  const memoizedLinks = useMemo(
    () =>
      [
        { name: "Home", path: "/" },
        { name: "GBMED", path: "/gbmed" },
        { name: "Academy", path: "/academy" },
        { name: "Gun Shop", path: "/gunshop/shooting-range" },
        { name: "Special OPS", path: "/special-op" },
        { name: "PSIRA Grades", path: "/psira-grades" },
        { name: "Internet", path: "/internet" },
      ].map((link) => (
        <div key={link.path} className="relative">
          <Link
            to={link.path}
            className={`nav-link ${activeLink === link.path ? "active" : ""}`}
            onClick={() => handleLinkClick(link.path)}
          >
            {link.name}
          </Link>
        </div>
      )),
    [activeLink]
  );

  return (
    <nav className="bg-gradient-to-r from-black via-red-900 to-black shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={Logo}
            alt="Gordons Bay Security Trust Logo"
            className="h-12 w-12"
          />
          <span className="text-2xl font-extrabold text-yellow-500">
            Gordons Bay Security Trust
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          {memoizedLinks}

          {/* Login/Logout Button */}
          <button
            onClick={handleLoginLogout}
            className="text-white bg-yellow-500 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            className="text-white focus:outline-none hover:text-stone-500 transition-all duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {memoizedLinks}

          {/* Login/Logout Button */}
          <button
            onClick={handleLoginLogout}
            className="px-2 py-1 text-1xl font-semibold text-white bg-black rounded-lg hover:bg-yellow-400 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
