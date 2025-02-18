import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cause from "../pages/Cause";
import CauseDetails from "../pages/CauseDetails";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import VolunteerForm from "../pages/VolunteerForm";
import Payment from "../pages/Payment";
import Error from "../pages/Error";



const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cause" element={<Cause />} />
                <Route path="/cause_detail" element={<CauseDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/volunteerform" element={<VolunteerForm />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<Error />} />
                
            </Routes>
        </>
    );
};

export default AppRoute;