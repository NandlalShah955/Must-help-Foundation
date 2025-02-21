import React,{useEffect} from 'react';
import "../styles/About.css";
import { Link } from 'react-router-dom';
import Cakecutting4 from "../assets/cakecutting4.jpeg"; 
import CEO from "../assets/CEO_Founder.jpeg";
import MD from "../assets/Managing_Director.jpeg";
const About = () => {
  const galleryData = [
    { image: CEO, name: "Mr.Aman Poddar  ", role: "CEO & Founder" },
    { image: MD, name: "Mr.Rana Poddar  ", role: "Managing Director" },
    { image: "https://musthelp.foundation/assets/cakecutting2-CZELHo5V.jpeg",  },
    { image: "https://musthelp.foundation/assets/milkandbanana-C4Uyazmq.jpeg",  },

  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about-main'>
      <div className='about-heading-tag'>
        <h1>Together We can Make a Difference.<br />Join Must Help Foundation. </h1>
        <h1>20000+
          <br />
          Meals
        </h1>
        <h1>Rs2100000 +
          <br />
          Total Donated
        </h1>

      </div>

      <div className='about-div'>
        <div>
          <img src={Cakecutting4} alt="Cake_cuttingimage" />
        </div>
        <div>
          <h1 className='maintext'>
            Your Impact Begins with Must Help Foundation
          </h1>
          <p className='paratext'>
          At Must Help Foundation, we are dedicated to making a real, lasting difference. Our mission is driven by a passion for helping communities, empowering people, and upholding human dignity.
We focus on both immediate needs and long-term solutions to create sustainable change.
          </p>
          <p className='paratext'>
          We also make it easy for you to get involved. Our platform offers secure donations and a supportive team ready to assist you every step of the way. 

          </p>
          <div className='about-founder'>
            <div className='about-founder-image'>
              <img src={CEO} alt="CEO_Image" />

            </div>
            <div>
              <h3>Mr.Aman Poddar</h3>
              <p>Ceo and founder</p>
            </div>

          </div>
        </div>
      </div>
      {/* Get in touch content  */}
      <section className="get_touch">
        <div className="get_touch_content">
          <div><span>Question ?</span> <p>Our Experts will help find the grar that’s right for you</p></div>
          <Link to='/contact'>
            <button className='get_touch_button'>
              Get In Touch
            </button>
          </Link>
        </div>
      </section>


      {/* Team Section  */}
      <div className='team-section'>
        <div className='team-intro'>
          <h1>Meet our team of Volunteers, Field Workers, and Technology Persons</h1>
          <p>Join MUST HELP FOUNDATION to help provide meals, essential items, educational support, medical aid, blankets for the needy, and tree planting events. Together, we can make a lasting impact on our community!.</p>
          <Link to='/volunteerform'>
            <button>
              JOIN OUR TEAM
            </button>
          </Link>
        </div>

        <div className='team-images'>

          {galleryData.length > 0 ? (
            galleryData.map((el) => (
              <div key={el.id} className='team_images-item'>
                <img src={el.image} alt={el.title} />
                <div className='team-title'>
                  <h4>{el.name}</h4>
                  <p>{el.role}</p>

                </div>
              </div>
            ))
          ) : (
            <p>Loading data...</p> // Show loading message while data is fetching
          )}

        </div>


      </div>


    </div>
  )
}

export default About