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
            <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" className="input" />
            </Form.Item>
            <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
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
              <DatePicker className="input datepicker" />
            </Form.Item>
            <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" className="input" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item label="Instagram ID (optional)" labelCol={{ className: "custom-label" }} name="instagram">
              <Input placeholder="Your Instagram ID" className="input" />
            </Form.Item>
            <Form.Item label="Name of Parcel" labelCol={{ className: "custom-label" }} name="parcel" rules={[{ required: true, message: "Please enter the parcel name!" }]}>
              <Input placeholder="Name of Parcel" className="input" />
            </Form.Item>
            <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" className="input" />
            </Form.Item>
          </div>

          <div className="form-row">
            <Form.Item label="Count" name="count" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter a count!" }]}>
              <Input type="number" min={1} placeholder="Count" className="input" />
            </Form.Item>
            <Form.Item label="Total Amount" name="total_amount" labelCol={{ className: "custom-label" }} rules={[{ required: true, message: "Please enter the total amount!" }]}>
              <Input type="number" min={0} placeholder="Total Amount" className="input" />
            </Form.Item>
            <Form.Item label="Donor Name" labelCol={{ className: "custom-label" }} name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" className="input" />
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