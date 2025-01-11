import React from 'react';
import "../styles/Homepage.css";
import HomepageCause from '../components/HomepageCause';
import ImageScroll from "../components/ImageScroll";
import { Link } from 'react-router-dom';

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

{/* Volunteer section / */}
 <div className='volunteerSection'>
    <div className='voluteerdiv'>
        <div>
            <img src="https://img.freepik.com/free-vector/cartoon-world-humanitarian-day-illustration_23-2148996147.jpg?semt=ais_hybrid" alt="Volunteer-Image" />
        </div>
        <div>
            <h1>Become a Volunteer</h1>
            <p>Welcome to MUST HELP FOUNDATION! We invite you to engage with us and support
                our mission to make a positive impact in our community. Your involvement helps us provide nutritious meals
                to the homeless, distribute essential items like eggs and milk to families in need, support children's
                education, aid young hospital patients, donate blankets during cold weather, and organize tree planting
                events for a greener future. Together, we can create a brighter future for everyone. Get involved today and
                make a difference!</p>
               <button >
                <Link to='/volunteerform' >
                BECOME A VOLUNTEER
                </Link>
               </button>
        </div>
    </div>
 </div>


        <ImageScroll/>
        </>
        
    );
}

export default Homepage