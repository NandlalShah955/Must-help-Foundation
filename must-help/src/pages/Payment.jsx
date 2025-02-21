import React,{useEffect} from 'react'
import "../styles/Payment.css";
import PaymentImage from "../assets/Payment_scanner.jpeg";

const Payment = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const handleSubmit=()=>{
    const data=JSON.parse(localStorage.getItem("formData"));
    if (!data) {
        alert("No data found!");
        return;
      }
  
      const phoneNumber = "918448674560"; 
  
      const message = `Donation Payment Details:
       Donor Name: ${data.name || "N/A"}
       Name on Parcel: ${data.parcel || "N/A"}
       Email: ${data.email || "N/A"}
       Phone: ${data.phone || "N/A"}
       Service Date: ${data.service_date || "N/A"}
       Food Count: ${data.count || "N/A"}
       Total Amount: ${data.total_amount || "N/A"}
       Total Donation: ${data.total_donation || "N/A"}
       I Want Image: ${data.I_want_image }
    
      Please verify the details.`;
      localStorage.removeItem("formData");
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
  } 
   
    return (
        <div className='payment-main'>

            <div className='payment-heading-tag'>
                <h1>Complete Your donation here </h1>

            </div>
            <div className='payment_div'>
                <img src={PaymentImage} alt="payment-image" />
               <p>Note:If Done with the payment Please click on Submit Button<br/>We Will get back to you</p>
                <button className="payment-submit" onClick={handleSubmit}>
                    Submit Now
                </button>
            </div>
        </div>
    )
}

export default Payment;