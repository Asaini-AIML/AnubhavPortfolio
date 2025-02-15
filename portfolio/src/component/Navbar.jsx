import React, { useState } from "react";
import Logo from "../assets/images/Logo.png"; // Keep logo in `src`

const Navbar = () => {
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <div className="bg-black overflow-hidden relative">
      {/* Flying Bird Animation */}
      <img
        src="/bird.gif" // Use the correct path (public folder)
        alt="Flying Bird"
        className="absolute top-1 left-1 w-20 animate-bird"
      />

      <div className="flex justify-between w-full bg-green-200 px-2">
        {/* Logo (Clickable) */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-14 hover:scale-125 hover:cursor-pointer transition-transform"
            onClick={() => setIsLogoOpen(true)}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 justify-evenly font-serif text-xl pt-4 flex-wrap">
          {["Home", "About", "Skills", "Project", "Contact", "More"].map(
            (item, index) => (
              <div
                key={index}
                className="hover:scale-125 hover:text-green-500 hover:cursor-pointer transition-transform"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {isLogoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-green-100 bg-opacity-50">
          <div className="bg-green-200 p-4 rounded-lg shadow-lg w-1/4">
            {/* Close Button */}
            <button
              className="text-right text-lg font-bold w-full"
              onClick={() => setIsLogoOpen(false)}
            >
              &times;
            </button>
            {/* Enlarged Image */}
            <img
              src={Logo}
              alt="Enlarged Logo"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
