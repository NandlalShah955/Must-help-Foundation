import React from 'react'
import "../styles/VolunteerForm.css";
import { Form, Input, Button, DatePicker } from "antd";

const VolunteerForm = () => {
  const onFinish = (values) => {

  };

  const onFinishFailed = (errorInfo) => {

  };
  return (
    <div className='volunteer-main'>
      <div className='volunteer-heading-tag'>
        <h1>Become a Volunteer </h1>
      </div>

      <div className='volunteer-form'>
        <Form name="contact-form" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <div className="form-row">
            <Form.Item label="Your Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" className="input" />
            </Form.Item>
            <Form.Item
              label="Phone"
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
              label="Gender"
              labelCol={{ className: "custom-label" }}
              name="phone"
              rules={[
                { required: true, message: "Please enter your gender" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a gender",
                },
              ]}
            >
              <Input placeholder="Your Phone" className='input' />
            </Form.Item>
            <Form.Item label="DOB" labelCol={{ className: "custom-label" }} name="service_date" rules={[{ required: true, message: "Please select a date!" }]}>
              <DatePicker className="input datepicker" />
            </Form.Item>
            <Form.Item label="Blood Group" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please select your blood group!" }]}>
              <Input placeholder="Select Blood Group Name" className="input" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item label="Street Address" labelCol={{ className: "custom-label" }} name="instagram">
              <Input placeholder="House name & Street name" className="input" />
            </Form.Item>
            <Form.Item label="Town/City" labelCol={{ className: "custom-label" }} name="parcel" rules={[{ required: true, message: "Please enter the House name!" }]}>
              <Input placeholder="Town/City" className="input" />
            </Form.Item>
            <Form.Item label="Would you Like to be an active blood donor" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your blood group!" }]}>
              <Input placeholder="Yes" className="input" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item label="Password" name="count" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter password!" }]}>
              <Input type="password" min={1} placeholder="Enter your password" className="input" />
            </Form.Item>
            <Form.Item label="Confirm Password" name="total_amount" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter the confirm password!" }]}>
              <Input type="password" min={0} placeholder="Enter your confirm password " className="input" />
            </Form.Item>
            <Form.Item label="Volunteer Type" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please select volunteer type" }]}>
              <Input placeholder="Select volunteer type" className="input" />
            </Form.Item>
          </div>



          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-submit">
              Join Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>

  )
}

export default VolunteerForm;