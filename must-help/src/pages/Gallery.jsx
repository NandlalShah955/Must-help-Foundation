import React from 'react'
import "../styles/Gallery.css";
import Foodimage1 from "../assets/foodimage1.jpeg";
import Foodimage2 from "../assets/foodimage2.jpeg";
import Cakecutting3 from "../assets/cakecutting3.jpeg";
import Cakecutting4 from "../assets/cakecutting4.jpeg";
import Surprisebox1 from "../assets/surprisebox1.jpeg";
import Surprisebox2 from "../assets/surprisebox2.jpeg";
import Blanket3 from "../assets/blanket3.jpeg";
import Blanket4 from "../assets/blanket4.jpeg";
import Educationkit3 from "../assets/educationkit3.jpeg";
import Educationkit4 from "../assets/educationkit4.jpeg";
import DogFeed3 from "../assets/dogfeed3.jpeg";
import Monthlyeducation2 from "../assets/monthlyeducation2.jpeg";
import Slipper2 from "../assets/slippers2.jpeg";
import Napkin2 from "../assets/stayfreepad2.jpeg";
import Cowfeed2 from "../assets/cowfeed2.jpeg";
import Vegbiryani2 from "../assets/vegbiryani2.jpeg";
import Vegthaali2 from "../assets/veg_thaali2.jpeg";
import bananamilk2 from "../assets/bananamilk2.jpeg";
import bag2 from "../assets/bag2.jpeg";
import wheelchair3 from "../assets/wheel_chair3.jpeg";
import bananamilk4 from "../assets/milkandbanana.jpeg";
import Vegthaali3 from "../assets/veg_thaali3.jpeg";
import Vegbiryani4 from "../assets/vegbiryani4.jpeg";
import Slipper3 from "../assets/slippers3.jpeg";
import DogFeed1 from "../assets/dogfeed1.jpeg";

const Gallery = () => {
  const galleryData = [
    { image: Foodimage1, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: DogFeed3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Blanket3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Slipper2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Surprisebox2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Cowfeed2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Educationkit3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Napkin2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Cakecutting3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Vegbiryani2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Monthlyeducation2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: wheelchair3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Surprisebox1, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: bananamilk2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Vegthaali3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Foodimage2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Slipper3, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: bag2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Blanket4, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Vegthaali2, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: DogFeed1, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Cakecutting4, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Vegbiryani4, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: Educationkit4, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: bananamilk4, filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
  ]
  return (
    <div className='gallery_main'>
      <div className='gallery-heading-tag'>
        <h1>Our Gallery</h1>
      </div>

      <div className='gallery_filters'>

      </div>

      <div className='gallery_images'>

        {galleryData.length > 0 ? (
          galleryData.map((el) => (
            <div key={el.id} className='gallery_images-item'>
              <img src={el.image} alt={el.title} />
              <div className='cause-title'>
                {/* <h4>{el.title}</h4>
              <p>Rs{el.price}/person</p> */}

              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p> // Show loading message while data is fetching
        )}

      </div>
    </div>
  )
}

export default Gallery