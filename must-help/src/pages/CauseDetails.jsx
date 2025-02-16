import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from "antd";
import causesDetails from "../causedetails.js";
import Warmblanket from "../assets/Donatewarmblanket.png";
import Eduationkit from "../assets/educationkit.png";
import TailorMachine from "../assets/Tailor_machine.jpg";
import DonateNapkin from "../assets/donatenapkin.jpeg"
import MonthlyEduacation from "../assets/monthlyexam.jpg";
import DonateSlippers from "../assets/donatesleepers.jpeg";
import Vegthali from "../assets/Veg_thali.jpeg";
import FeedCows from "../assets/Feedcows.jpeg";
import campaign1 from "../assets/campaign1.png";
import campaign2 from "../assets/campaign2.png";
import campaign3 from "../assets/campaign3.png";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper/modules";


import "../styles/CauseDetails.css";
const extractPrice = (priceString) => {
  const match = priceString.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
};
const CauseDetails = () => {
  const location = useLocation();
  const { cause, price } = location.state || {};
  const [filteredData, setfilteredData] = useState([])

  
  useEffect(() => {
    const filteredCause = causesDetails?.find(item => item.name === cause); 
  // console.log('filteredCause', filteredCause)
  setfilteredData(filteredCause)
    
  }, [])
  
  const onFinish = (values) => {

  };

  const onFinishFailed = (errorInfo) => {

  };
  console.log('filteredData', filteredData)
  const causes = [
    {
      image: Vegthali,
      title: "Feed a Veg Thaali",
      price: "Starting ₹120",
    },
    {
      image: Warmblanket,
      title: "Donate a Warm Blanket",
      price: "₹199 / Blanket",
    },
    {
      image: Eduationkit,
      title: "Donate a Education kit",
      price: "₹499 / per Kid",
    },
    {
      image: TailorMachine,
      title: "Donate a Tailoring Machine",
      price: "₹6000 / person",
    },
    {
      image: DonateNapkin,
      title: "Donate A Stayfree Pad",
      price: "₹39 / Napkin",
    },
    {
      image: MonthlyEduacation,
      title: "Sponser a kid Monthly Education",
      price: "₹699 / Kit",
    },
    {
      image: DonateSlippers,
      title: "Donate Slippers to kid",
      price: "₹99 / Slippers",
    },
  ];
  const donors = [
    {
      image: campaign3,
      name: "Amit Sharma",
      donation: "1000Rs"

    },
    {
      image: campaign1,
      name: "Suman Verma",
      donation: "1000Rs"

    },
    {
      image: campaign2,
      name: "Krishna Swami",
      donation: "3000Rs"
    },
    {
      image: campaign3,
      name: "Nitin Sharma",
      donation: "400Rs"
    },
    {
      image: campaign3,
      name: "Ananya Verma",
      donation: "1000Rs"
    },
  ];
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
              <div className='cause-card-images'>
                <img src={filteredData.image1} alt="" />
                <img src={filteredData.image2} alt="" />
                <img src={filteredData.image3} alt="" />
                <img src={filteredData.image4} alt="" />
                
              </div>
              <div className='cause-card-details'>
                <h3>{filteredData.name}</h3>
                <p>Starting ₹{filteredData.price}</p>
              </div>
            </div>
            <p>
             {filteredData.description}
            </p>
          </div>

          {/* Donation Form */}

          <div className="donation-form">
            <h2>{cause}</h2>
            <Form name="contact-form" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <div className="form-row">
                <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
                  <Input placeholder="Your Name" className="causedetailsinput" />
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
                  <Input placeholder="Your Email" className="causedetailsinput" />
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
                  <Input placeholder="Your Phone" className='causedetailsinput' />
                </Form.Item>
                <Form.Item label="Service Date" labelCol={{ className: "custom-label" }} name="service_date" rules={[{ required: true, message: "Please select a date!" }]}>
                  <DatePicker className="causedetailsinput datepicker" />
                </Form.Item>
              </div>

              <div className="form-row">
                <Form.Item label="Instagram ID (optional)" labelCol={{ className: "custom-label" }} name="instagram">
                  <Input placeholder="Your Instagram ID" className="causedetailsinput" />
                </Form.Item>
                <Form.Item label="Name of Parcel" labelCol={{ className: "custom-label" }} name="parcel" rules={[{ required: true, message: "Please enter the parcel name!" }]}>
                  <Input placeholder="Name of Parcel" className="causedetailsinput" />
                </Form.Item>
              </div>

              <div className="form-row">
                <Form.Item label="Count" name="count" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter a count!" }]}>
                  <Input type="number" min={1} placeholder="Count" className="causedetailsinput" />
                </Form.Item>
                <Form.Item label="Total Amount" name="total_amount" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter the total amount!" }]}>
                  <Input type="number" min={0} placeholder="Total Amount" className="causedetailsinput" />
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
            <div className='contact-poster'>
              <h2>Our Policy</h2>
              <img src={filteredData.form_image} alt="" />
            </div>
          </div>



          {/* Recommend Causes */}
          <div className="recommend-causes">
            <h2>Recent Causes</h2>
            <Swiper
              direction="vertical"
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={4}
              speed={1000}
              className="cause-carousel"
              modules={[Autoplay]}
            >
              {causes.map((cause, index) => (
                <SwiperSlide key={index} className="cause-slide">
                  <img src={cause.image} alt={cause.title} />
                  <div className='cause-slide-text'>
                    <h4>{cause.title}</h4>
                    <p>{cause.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h2>Recent Donors</h2>
            <Swiper
              direction="vertical"
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              slidesPerView={4}
              speed={1000}
              className="cause-carousel second-carousel"
              modules={[Autoplay]}
            >
              {donors.map((donor, index) => (
                <SwiperSlide key={index} className="cause-slide second-slider">
                  <div>
                    <strong>Name:</strong> <span>{donor.name}</span>
                  </div>
                  <div>
                    <strong>Amount:</strong> <span>{donor.donation}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </>
  )
}

export default CauseDetails;