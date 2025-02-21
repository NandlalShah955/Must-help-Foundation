import React,{useEffect} from 'react';
import "../styles/Blog.css";
import Banner from "../assets/FeedBanner.png";
import Campaign1 from "../assets/campaign1.png";
const Blog = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className='blog-main'>

      <div className='blog-heading-tag'>

        <h1>Our Latest Blog</h1>
      </div>

      <div className='blog-section'>
        <img src={Banner} alt="" />
        {/* <img src={Banner} alt="" /> */}
      </div>
      <div className='blog-section'>
        <img src={Campaign1} alt="" />
        {/* <img src={Banner} alt="" /> */}
      </div>
    </div>
  )
}

export default Blog