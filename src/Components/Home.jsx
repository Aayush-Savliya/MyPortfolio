import React from "react";
import pic from "../../public/photo.avif";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <div 
    name="Home"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-8 md:mt-24 space-y-2 md:order-1 order-2">
          <span className="text-xl">Welcome In My Feed!</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1 className="">
              Hello, I'm a MERN Stack{" "}
              <ReactTyped
                className="text-red-600"
                strings={["Developer."]}
                typeSpeed={40}
              />
            </h1>
            <br />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            The MERN stack is a collection of technologies that help developers
            build robust and scalable web applications using JavaScript. The
            acronym “MERN” stands for MongoDB, Express, React, and Node.js, with
            each component playing a role in the development process.{" "}
          </p>
          <br />
          {/* social media icon  */}
          <div className="flex flex-col items-center md:flex-row space-y-6 justify-between md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-semibold">Availble On</h1>
              <ul className="flex space-x-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aayush-savliya-0b9291246/"
                    target="_blank"
                  >
                    {<FaLinkedin size={23} />}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Aayush-Savliya" target="_blank">
                    {<FaGithub size={23} />}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_ayushh23._/?next=%2F&hl=en" target="_blank">
                    {<FaInstagramSquare size={23} />}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-semibold">Currently Available On</h1>
              <ul className="flex space-x-5">
                <li>{<SiMongodb size={23} />}</li>
                <li>{<SiExpress size={23} />}</li>
                <li>{<IoLogoReact size={23} />}</li>
                <li>{<FaNode size={23} />}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img
            src={pic}
            className="md:w-{450px} md:h-{450px} rounded-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
