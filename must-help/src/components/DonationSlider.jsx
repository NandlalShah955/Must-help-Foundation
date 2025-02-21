import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const donations = [
  { name: "Sushma", amount: "2500", cause: "food for children" },
  { name: "sayyam jain ", amount: "₹6400", cause: "Study Kit" },
  { name: "Hari Kumar", amount: "2500", cause: "food for children" },
  { name: "Sneha", amount: "₹500", cause: "food for children" },
  { name: "Jumana", amount: "₹999", cause: "cake Distrubution" },
  { name: "Dilip Kumar Ghosh", amount: "₹1000", cause: "food for dogs" },
  { name: "Hemanth sabba", amount: "₹8187", cause: "blanket distrubution" },
  { name: "Shubha", amount: "₹1000", cause: "cake Distrubution" },
  { name: "E. Venkatesh ", amount: "1200", cause: "veg biryani " },
  { name: "shahidhar", amount: "₹2698", cause: "education kit distrubution" },
  { name: "Madhuri", amount: "₹1250", cause: "food  Distrubution" },
  { name: "Meghana", amount: "₹9900", cause: "slipper donation" },
  { name: "Bhavana", amount: "₹1500", cause: "milk & banana distrubution" },
  { name: "Deepak Tiwari", amount: "2495", cause: "school bag " },
  { name: "kalaivanan & family ", amount: "2400", cause: "veg thaali " },
  { name: "Dilip Kumar Ghosh", amount: "11000", cause: "wheel chair donation" },
  { name: "chandu Poojitha", amount: "490", cause: "planting plants" },
  { name: "Hari Shankar Sai ", amount: "6000", cause: "tailor machine " },
  { name: "Gopal mitiwaala", amount: "5000", cause: "surprise box" },
  { name: "ankitha buthello ", amount: "390", cause: "napkin donation" },
];

const DonationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % donations.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentIndex}
      className="slider"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      {donations[currentIndex].name} donated {donations[currentIndex].amount} for{" "}
      {donations[currentIndex].cause}
    </motion.div>
  );
};

export default DonationSlider;
