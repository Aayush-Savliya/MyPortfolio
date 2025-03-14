import React from "react";
import { projctsName } from "./Data/portfolioData";

const Portfolio = () => {
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
              <div>
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full ml-5 mt-4 border-l-black shadow-xl"
                  alt=""
                />
              </div>
              <div className="p-5">
                <div className="font-semibold size-4 mt-7">{name}</div>
                <br />
                <p>{about}</p>
              </div>
              <div className=" px-6 py-4 flex space-x-4 justify-around">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
