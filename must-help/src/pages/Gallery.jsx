import React from 'react'
import "../styles/Gallery.css";

const Gallery = () => {
  const galleryData = [
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
    { image: "https://thaagamorg-eb-s3.s3.amazonaws.com/static/website/images/recent-posts/Homeless/CHILD_2.webp", filter: "HOMELESS  ", desc: "Support for Homeless individuals" },
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