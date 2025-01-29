import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/CauseDetails.css";
const CauseDetails = () => {
  const location = useLocation();
  const { cause } = location.state || {};
  console.log(cause, "cause");
  return (
    <>
      <div className='cause_main'>
        <div className='cause-heading-tag'>
          <div>
            <h1>{cause}</h1>

          </div>
        </div>
        <div className="cause-section">
      {/* Causes Details */}
      <div className="cause-details">
        <h2>Causes Details</h2>
        <div className="cause-card">
          <img src="example-image.jpg" alt="Cause" className="cause-image" />
          <h3>Educate a Child</h3>
          <p>Starting ₹800</p>
        </div>
        <p>
          Child Education Since December 2021, Thaagam Foundation’s Child
          Education program has been a vital support system for economically
          disadvantaged children...
        </p>
      </div>

      {/* Donation Form */}
      <div className="donation-form">
        <h2>Donate for Educate a Child</h2>
        <form>
          <input type="text" placeholder="Donor Name*" required />
          <input type="email" placeholder="Email address*" required />
          <input type="tel" placeholder="Phone*" required />
          <input type="date" />
          <input type="text" placeholder="Instagram ID (optional)" />
          <input type="text" placeholder="Name of Parcel" />
          <input type="number" placeholder="Count" min="1" defaultValue="1" />
          <input type="text" placeholder="Total Amount" defaultValue="800" />
          <button type="submit">Donate Now</button>
        </form>
      </div>

      {/* Recommend Causes */}
      <div className="recommend-causes">
        <h2>Recommend Causes</h2>
        <ul>
          <li>Give a Pongal Kit ₹500 / Kit</li>
          <li>Give a Grocery Kit ₹500 / Kit</li>
          <li>Donate a Christmas Gift ₹200 / Child</li>
          <li>Donate A Hearing Aid ₹2500 / Kit</li>
          <li>Give a School Bag ₹500 / Bag</li>
        </ul>
      </div>
    </div>
      
      
      </div>

    </>
  )
}

export default CauseDetails;