import React from 'react'
import "../styles/Contact.css"
import { Form, Input, Button, Checkbox } from "antd";
const Contact = () => {
  const onFinish = (values) => {
    const { name, email, phone, address, description } = values;
   console.log('name,email,phone,address', name,email,phone,address) ;

    const message = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AAddress: ${address}%0ACase Description: ${description}`;
    const whatsappNumber = "918448674560"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.location.href = whatsappURL; 
  };

  const onFinishFailed = (errorInfo) => {
    if(!name, !email,!phone, !address, !description){
      alert('Please fill all the details')
    }else{

      alert(errorInfo);
    }
    
  }

  return (
    <div className='contact-main'>

      <div className='contact-heading-tag'>
        <h1>Need Assistance? Reach Out to Our<br/> Support Team</h1>
        
      </div>



      <div className="contact-container">
        <div className="contact-info">
          <h1>Our Contacts</h1>
          <div className='contact-india'>
            <img src="https://seeklogo.com/images/I/india-flag-logo-3522C6780F-seeklogo.com.png" alt="India-logo" />
           <p>India</p>
          </div>
         
          <h4>1450, Phase-3, J.J.Colony, Madanpur Khadar, New Delhi-110076, Delhi, India</h4>
          <div className='contact-mobil'>
            <div>
              <h4>

                <b>Call Us:</b> +91 8448674560
              </h4>
            </div>
            <div>
              <h4>
                <b>Email Us:</b> must.foundation@gmail.com
              </h4>
            </div>
          </div>


          <div className="map">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.6901466241259!2d77.31728605885297!3d28.528286962935343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce78dbb6a3acf%3A0x900e71bdcead8f7a!2sMust%20Help%20Foundation!5e0!3m2!1sen!2sin!4v1736588641053!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.6901466241259!2d77.31728605885297!3d28.528286962935343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce78dbb6a3acf%3A0x900e71bdcead8f7a!2sMust%20Help%20Foundation!5e0!3m2!1sen!2sin!4v1736588641053!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className="contact-form">
          <h2>Quick Contact Form</h2>
          <Form
            name="contact-form"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="form-row">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Your Name" className='input' />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Your Email" className='input' />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item
                label="Phone"
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
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please enter your address!" }]}
              >
                <Input placeholder="Your Address" className='input' />
              </Form.Item>
            </div>
            <Form.Item
              label="Case Description"
              name="description"
              rules={[
                { required: true, message: "Please describe your case!" },
              ]}
            >
              <Input.TextArea placeholder="Your Message" rows={6} className='textarea' />
            </Form.Item>

            {/* <Form.Item
              name="recaptcha"
              valuePropName="checked"
              rules={[
                { validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Please confirm you're not a robot!")) },
              ]}
            >
              <Checkbox>I’m not a robot</Checkbox>
            </Form.Item> */}

            <Form.Item>
              <Button type="primary" htmlType="submit" block className='contact-submit'>
                Submit Now
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact