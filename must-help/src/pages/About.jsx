import React from 'react';
import "../styles/About.css";
import { Link } from 'react-router-dom';
const About = () => {
  const galleryData = [
    { image: "https://balloon-mahal.netlify.app/assets/img/Aman.JPG", name: "Mr.Aman Poddar  ", role: "CEO & Founder" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/assets/images/about/charles_sir.webp", name: "Mr.Rana Poddar  ", role: "Managing Director" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp",  },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp",  },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp",  },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp",  },

  ]
  return (
    <div className='about-main'>
      <div className='about-heading-tag'>
        <h1>Together We can Make a Difference.<br />Join Thaagam Foundation. </h1>
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
          <img src="https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/assets/images/about/about.webp" alt="" />
        </div>
        <div>
          <h1 className='maintext'>
            Your Impact Begins with Must Help Foundation
          </h1>
          <p className='paratext'>
            At Must Help Foundation, we're committed to creating a meaningful and lasting impact that transcends the ordinary. Our passion for humanitarian aid, community empowerment, and individual dignity drives our mission. Our initiatives are carefully crafted to address immediate needs and foster sustainable development.
          </p>
          <p className='paratext'>
            In addition to our extensive programs, we're equally devoted to ensuring your involvement is impactful and fulfilling. Our platform is designed with your convenience in mind, offering secure donations and a responsive support team to assist you every step of the way

          </p>
          <div className='about-founder'>
            <div className='about-founder-image'>
              <img src="https://balloon-mahal.netlify.app/assets/img/Aman.JPG" alt="" />

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
          <Link to='/contact'>
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