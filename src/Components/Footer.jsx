import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div>
          <div className="flex justify-center gap-6 items-center">
            <a
              href="https://www.linkedin.com/in/aayush-savliya-0b9291246/"
              target="_blank"
            >
              {<FaLinkedin size={23} />}
            </a>
            <a
              href="https://www.instagram.com/_ayushh23._/?next=%2F&hl=en"
              target="_blank"
            >
              {<FaInstagramSquare size={23} />}
            </a>
            <a href="https://github.com/Aayush-Savliya" target="_blank">
              {<FaGithub size={23} />}
            </a>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="font-semibold">
              &copy; 2024 Your Company. All rights reserved.
            </p>
            {/* <p className="text-sm">Supportive Partner ❤️ Ankush</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
