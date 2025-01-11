import React, { useState, useEffect } from 'react'
import '../styles/Homepage.css';
const HomepageCause = () => {
  
const data=[
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/d_thaali.jpeg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
{image:'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg',title:'Feed A Homeless Perons',price:'25'},
]
  

  return (
    <div className='cause_main'>
    <div className='filters'>

         <h1>Our Causes</h1>
    </div>
      <div className='Maincausecontainer'>
        {data.length > 0 ? (
          data.map((el) => (
            <div key={el.id} className='cause-item'>
              <img src={el.image} alt={el.title} />
              <div className='cause-title'>
              <h4>{el.title}</h4>
              <p>Rs{el.price}/person</p>

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

export default HomepageCause
