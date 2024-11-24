// Button.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  ariaLabel?: string; // Optional aria-label prop
}

const Button: React.FC<ButtonProps> = ({ to, children, ariaLabel }) => {
  return (
    <Link to={to} aria-label={ariaLabel}>
      <button className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:bg-stone-700 hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-400">
        {children}
      </button>
    </Link>
  );
};

export default Button;
