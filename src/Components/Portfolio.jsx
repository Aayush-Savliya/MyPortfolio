import React from "react";
import express from "../../public/express.png";
import react from "../../public/react.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";
import angular from "../../public/Angular.png";
import mongodb from "../../public/mongodb.jpg";

const Portfolio = () => {
  const projctsName = [
    {
      id: 1,
      logo: express,
      name: "Express",
      about:
        "Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily.",
    },
    {
      id: 2,
      logo: react,
      name: "React",
      about:
        "React.js is a JavaScript library that helps developers build user interfaces (UIs) for web applications and mobile apps. It's free and open-source, and is maintained by Meta (formerly Facebook) and a community of developers. ",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
      about:
        "JavaScript (JS) is a programming language that lets developers create interactive web pages. It is one of the most widely used programming languages in the world. ",
    },
    {
      id: 4,
      logo: node,
      name: "Node",
      about:
        "Node.js is a JavaScript runtime environment that is used to build web applications, APIs, and more. It is an open-source, cross-platform technology that is popular for server-side web development. ",
    },
    {
      id: 5,
      logo: angular,
      name: "Angular",
      about:
        "Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, and more.",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
      about:
        "MongoDB is an open-source, document-oriented database that stores data in flexible documents instead of tables. It's a NoSQL database, which means it doesn't require a relational database management system (RDBMS). ",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {projctsName.map(({ id, logo, name, about }) => (
            <div
              className="md:w[300px] md:h[300px] border-red-100 bg-white rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full ml-5 mt-4 border-l-black shadow-xl"
                alt=""
              />
              <div className="p-5">
                <div className="font-semibold mt-7">{name}</div>
                <br />
                <p>{about}</p>
              </div>
              <div className=" px-6 py-4 flex space-x-4 justify-around">
                <button className="bg-amber-50 hover:bg-amber-200 text-black font-semibold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-amber-400 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
