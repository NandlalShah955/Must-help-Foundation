import React from 'react';
import "../styles/Homepage.css";

const Homepage = () => {
    return (
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
    );
}

export default Homepage