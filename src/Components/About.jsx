import React from 'react'
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p>
      Hello, I'm <span className='font-semibold text-red-600'>Aayush Savaliya,</span> a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
      </p>
      <br />
        <h1 className="text-green-700 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          BCA,R.P.BHALODIA COLLEGE - RAJKOT,2025, BCA - [BATCH:2022-2025].
        
        </span>
        <br />
        <br />
        <h1 className="text-green-700 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in React Experienced with Strong grasp of Design's
          Excellent problem-solving skills Effective communicator and
          collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-700 font-semibold text-xl">
          Download My Resume
        </h1>
        <span className='flex gap-4'>
         <a href="">{<FaDownload size={24} className='rounded-full border-black'/>}</a><p>Please Check Resume. </p>
        </span>
        <br />
        
        <h1 className="text-green-700 font-semibold text-xl">
          
        </h1>
        <span>
         
        </span>
       
        <h1 className="text-green-700 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Web Development solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
    </div>
  )
}

export default About
