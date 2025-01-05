import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cause from "../pages/Cause";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";


const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cause" element={<Cause />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                
            </Routes>
        </>
    );
};

export default AppRoute;