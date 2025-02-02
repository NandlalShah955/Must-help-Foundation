import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, Select, DatePicker } from "antd";

import "../styles/CauseDetails.css";
const extractPrice = (priceString) => {
  const match = priceString.match(/\d+/); 
  return match ? parseInt(match[0], 10) : null;
};
const CauseDetails = () => {
  const location = useLocation();
  const { cause,price } = location.state || {};
 
  const exactPrice = extractPrice(price);
  console.log(cause,exactPrice ,"cause");
  const onFinish = (values) => {
    // console.log("Form Data Submitted: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Form Submission Failed: ", errorInfo);
  };
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
            <h2>{cause}</h2>
            <Form name="contact-form" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <div className="form-row">
                <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }}  name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
                  <Input placeholder="Your Name" className="input" />
                </Form.Item>
                <Form.Item
                  label="Email address"
                  labelCol={{ className: "custom-label" }}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="Your Email" className="input" />
                </Form.Item>
              </div>

              <div className="form-row">
              <Form.Item
                  label="Count"
                  labelCol={{ className: "custom-label" }}
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your phone number!" },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Your Phone" className='input' />
                </Form.Item>
                <Form.Item label="Service Date" labelCol={{ className: "custom-label" }} name="service_date" rules={[{ required: true, message: "Please select a date!" }]}>
                  <DatePicker className="input"  />
                </Form.Item>
              </div>

              <div className="form-row">
                <Form.Item label="Instagram ID (optional)" labelCol={{ className: "custom-label" }} name="instagram">
                  <Input placeholder="Your Instagram ID" className="input" />
                </Form.Item>
                <Form.Item label="Name of Parcel" labelCol={{ className: "custom-label" }} name="parcel" rules={[{ required: true, message: "Please enter the parcel name!" }]}>
                  <Input placeholder="Name of Parcel" className="input" />
                </Form.Item>
              </div>

              <div className="form-row">
                <Form.Item label="Count" name="count" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter a count!" }]}>
                  <Input type="number" min={1} placeholder="Count" className="input" />
                </Form.Item>
                <Form.Item label="Total Amount" name="total_amount" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter the total amount!" }]}>
                  <Input type="number" min={0} placeholder="Total Amount" className="input" />
                </Form.Item>
              </div>

              <Form.Item label="Total Donation" labelCol={{ className: "custom-label" }} name="total_donation" >
                <Input placeholder="Your Message" className="widerinput" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="contact-submit">
                  Submit Now
                </Button>
              </Form.Item>
            </Form>
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