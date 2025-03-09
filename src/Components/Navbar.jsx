import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 rounded-full w-12" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">
            AAYUS<span className="text-red-600 text-xl">H</span>
            <p>MERN Stack Developer</p>
          </h1>
        </div>
        <div className="">
          <ul className="hidden md:flex space-x-10">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 hover:underline duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duretion={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              setmenu(!menu);
            }}
             className="md:hidden"
          >
            {menu ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24} />}
          </div>
        </div>
      </div>
      {menu && (
        <div className="">
          <ul className="md:hidden bg-white flex flex-col items-center justify-center h-screen space-y-7">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 font-semibold text-xl duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={text}
                  onClick={() => {
                    setmenu(!menu);
                  }}
                  smooth={true}
                  duretion={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
