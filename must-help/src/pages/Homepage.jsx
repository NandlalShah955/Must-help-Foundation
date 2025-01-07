import React from 'react';
import "../styles/Homepage.css";
import HomepageCause from '../components/HomepageCause';
import ImageScroll from "../components/ImageScroll";

const Homepage = () => {
    return (
        <>
        <div className="homepage">
            <video 
                src="https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/background/thaagam.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="background-video"
            />
        </div>
        
        <HomepageCause/>
        <ImageScroll/>
        </>
        
    );
}

export default Homepage