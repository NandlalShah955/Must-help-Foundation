import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from "antd";
import causesDetails from "../causedetails.js";
import Warmblanket from "../assets/Donatewarmblanket.png";
import Eduationkit from "../assets/educationkit.png";
import TailorMachine from "../assets/Tailor_machine.jpg";
import DonateNapkin from "../assets/donatenapkin.jpeg"
import MonthlyEduacation from "../assets/monthlyexam.jpg";
import DonateSlippers from "../assets/donatesleepers.jpeg";
import Vegthali from "../assets/Veg_thali.jpeg";
import CommanformImage from "../assets/comman_form_video_image.jpeg";
import moment from 'moment';
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
  const navigate = useNavigate();
  const { cause, price } = location.state || {};
  const [count, setCount] = useState(2);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const filteredCause = causesDetails?.find(item => item.name === cause);
    setFilteredData(filteredCause);

    const finalPrice = extractPrice(price);

    if (finalPrice) {
      const calculatedAmount = count * finalPrice;
      setTotalAmount(calculatedAmount);

      form.setFieldsValue({
        total_amount: calculatedAmount,
        // total_donation: calculatedAmount,
        count,

      });
    }
  }, [price, cause, count, form]);
  const handleChange = (e) => {
    let value = Number(e.target.value);
    setCount(value);

    const finalPrice = extractPrice(price);
    if (finalPrice) {
      const calculatedAmount = value * finalPrice;
      setTotalAmount(calculatedAmount);

      form.setFieldsValue({
        total_amount: calculatedAmount,
        // total_donation: calculatedAmount,
        count: value,

      });
    }
  };
  const handleCountChange = (e) => {
    let value = Number(e.target.value);

    const finalPrice = extractPrice(price);
    if (finalPrice) {
      const adjustedCount = value / finalPrice;
      setCount(adjustedCount);

      form.setFieldsValue({
        count: adjustedCount,
        total_amount: adjustedCount * finalPrice,
        // total_donation: adjustedCount * finalPrice,
      });
    }
  }

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsCheckboxChecked(checked);

    if (checked) {
      const finalPrice = extractPrice(price);
      if (finalPrice) {
        if (checked && totalAmount < 2500) {
          const minCount = Math.ceil(2500 / finalPrice);
          const newTotal = minCount * finalPrice;

          setCount(minCount);
          setTotalAmount(newTotal);

          form.setFieldsValue({
            total_amount: newTotal,
            // total_donation: newTotal,
            count: minCount,
          });
        }
      }
    }
  };
  const handleImageCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const onFinish = (values) => {
    const formData = {
      ...values,
      I_want_image: isChecked ? 'yes' : 'no',
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/payment')

  };

  const onFinishFailed = (errorInfo) => {

  };

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
      name: "Amit Sharma",
      donation: "1000Rs"

    },
    {
      name: "Suman Verma",
      donation: "1000Rs"

    },
    {
      name: "Krishna Swami",
      donation: "3000Rs"
    },
    {
      name: "Nitin Sharma",
      donation: "400Rs"
    },
    {
      name: "Ananya Verma",
      donation: "1000Rs"
    },
    {
      name: "BANKA PCR",
      donation: "250Rs"
    },
    {
      name: "Sunit ghai",
      donation: "4000Rs"
    },
    {
      name: "Satish",
      donation: "350Rs"
    },
    {
      name: "Vikas tejur",
      donation: "250Rs"
    },
    {
      name: "Elvina francy",
      donation: "100Rs"
    },
    {
      name: "Sowmya sri",
      donation: "1250Rs"
    },
    {
      name: "Andrea lewis",
      donation: "1250Rs"
    },
    {
      name: "Hemanth varapu",
      donation: "8187Rs"
    },
    {
      name: "soumya pandu",
      donation: "1250Rs"
    },
    {
      name: "vangala saikiran",
      donation: "1000Rs"
    },
    {
      name: "shanmukha bharathi",
      donation: "100Rs"
    },
    {
      name: "dhruv",
      donation: "3000Rs"
    },
    {
      name: "Ramya phadnis",
      donation: "1500Rs"
    },
    {
      name: "Sinha parivar",
      donation: "2500Rs"
    },
    {
      name: "khushi",
      donation: "500Rs"
    },
    {
      name: "fara",
      donation: "250Rs"
    },
    {
      name: "Shubha",
      donation: "1000Rs"
    },
    {
      name: "Midhun sukumaran",
      donation: "1000Rs"
    },
    {
      name: "Roopa G",
      donation: "2500Rs"
    },
    {
      name: "Samaneu satheesh",
      donation: "750Rs"
    },
    {
      name: "Hemasaiprasad",
      donation: "5000Rs"
    },
    {
      name: "Anup Sharma",
      donation: "2500Rs"
    },
    {
      name: "sireesha",
      donation: "1250Rs"
    },
    {
      name: "Srinivas",
      donation: "250Rs"
    },
    {
      name: "Harshita",
      donation: "750Rs"
    },
    {
      name: "Zaid",
      donation: "1000Rs"
    },
    {
      name: "Ch Rajesh ",
      donation: "1500Rs"
    },
    {
      name: "Somesh kothari",
      donation: "2500Rs"
    },
    {
      name: "Pragathi M",
      donation: "1400Rs"
    },
    {
      name: "Ganesh ",
      donation: "4500Rs"
    },
    {
      name: "Faisal Karobari ",
      donation: "2880Rs"
    },
    {
      name: "sanketh PondlaS",
      donation: "1000Rs"
    },
    {
      name: "Wai Ling",
      donation: "100Rs"
    },
    {
      name: "sandeep Teddy",
      donation: "1500Rs"
    },
    {
      name: "abijith CV",
      donation: "500Rs"
    },
    {
      name: "sai Ganesh ",
      donation: "2500Rs"
    },
    {
      name: "Sayyam Jain",
      donation: "5500Rs"
    },
    {
      name: "Ravi ",
      donation: "3500Rs"
    },
    {
      name: "D. Venkata sai",
      donation: "1500Rs"
    },
    {
      name: "Ramya ",
      donation: "100Rs"
    },
    {
      name: "jahnavi Reddy ",
      donation: "375Rs"
    },
    {
      name: "Izna Tasneem",
      donation: "750Rs"
    },
    {
      name: "Zeeshan Farhath",
      donation: "300Rs"
    },
    {
      name: "umesh_gudem",
      donation: "2500Rs"
    },
    {
      name: "Mayur Tarafdar",
      donation: "3100Rs"
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
                <img src={filteredData.image1} alt="cause_image" />
                <img src={filteredData.image2} alt="cause_image" />
                <img src={filteredData.image3} alt="cause_image" />
                <img src={filteredData.image4} alt="cause_image" />

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
            <Form form={form} initialValues={{ count: 2 }} name="contact-form" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <div className="form-row">
                <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
                  <Input placeholder="Your Name" className="causedetailsinput" />
                </Form.Item>
                <Form.Item label="Name on Food Box" labelCol={{ className: "custom-label" }} name="parcel" rules={[{ required: true, message: "Please enter the parcel name!" }]}>
                  <Input placeholder="Name of Parcel" className="causedetailsinput" />
                </Form.Item>
               
              </div>

              <div className="form-row">
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
                <Form.Item
                  label="Whatsapp Number"
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
               
              </div>

              <div className="form-row">
                <Form.Item label="Service Date" labelCol={{ className: "custom-label" }} name="service_date" rules={[{ required: true, message: "Please select a date!" }]}>
                  <DatePicker
                    className="causedetailsinput datepicker"
                    disabledDate={(current) => {
                      return current && (current.valueOf() <= moment().valueOf());
                    }}
                  />
                </Form.Item>
                <Form.Item label="Instagram ID (optional)" labelCol={{ className: "custom-label" }} name="instagram">
                  <Input placeholder="Your Instagram ID" className="causedetailsinput" />
                </Form.Item>
              </div>

              <div className="form-row">
                <Form.Item label="Count" name="count" labelCol={{ className: "custom-label" }}>
                  <Input
                    type="number"
                    min={1}
                    value={count}
                    onChange={handleChange}
                    placeholder="Count"
                    className="causedetailsinput"
                  />
                </Form.Item>
                <Form.Item label="Total Amount" onChange={handleCountChange} name="total_amount" labelCol={{ className: "custom-label" }}>
                  <Input type="number" min={0} className="causedetailsinput" />
                </Form.Item>
              </div>

              {/* <Form.Item label="Total Donation" onChange={handleCountChange} name="total_donation" labelCol={{ className: "custom-label" }}>
                <Input type="number" min={0} className="causedetailsinput" />
              </Form.Item> */}

              <h2>Packages</h2>
              <div className="form-image-checkbox">
                <div className="form-image-checkbox-image">
                  <label className="image-checkbox">
                    <input type="checkbox" onChange={handleImageCheckboxChange} />
                    <span className="custom-checkbox"></span>
                    <img src={filteredData.form_checkbox} alt="form_image" />
                  </label>
                  <p>Price: Free of cost</p>
                </div>

                <div className="form-image-checkbox-image">
                  <label className="image-checkbox">
                    <input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} />
                    <span className="custom-checkbox"></span>
                    <img src={CommanformImage} alt="form_image" />
                  </label>
                  <p>Price: Rs2500</p>
                </div>
              </div>


              <Form.Item>
                <Button type="primary" htmlType="submit" block className="contact-submit">
                  Donate Now
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