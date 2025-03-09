import React from 'react'
import express from "../../src/assets/express.png";
import react from "../../src/assets/react.svg";
import node from "../../src/assets/mongodb.png";
import mongodb from "../../src/assets/node.png";


const Experiance = () => {
    const cardItem=[
        {
            id:1,
            logo:express,
            name:"Express"
        },
        {
            id:2,
            logo:react,
            name:"React"
        },
        {
            id:3,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:4,
            logo:node,
            name:"Node"
        },
    ]
  return (
    <div name="Experiance"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
      <h1 className="text-3xl font-bold mb-5">Experiance</h1>
      <span className='font-semibold hover:underline'>Entry-Level Professional with Fresh Ideas and a Strong Work Ethic.</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="font-semibold">{name}</div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experiance
