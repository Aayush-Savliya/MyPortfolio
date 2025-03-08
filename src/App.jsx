import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experiance from "./Components/Experiance";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Experiance" element={<Experiance/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Footer/>
      </Routes>
      <Toaster />
    </div>
   
  );
};

export default App;
