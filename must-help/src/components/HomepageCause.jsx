import React from 'react'
import '../styles/Homepage.css';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Feedhomeless from "../assets/Feedhomelesskid.jpeg";
import SponsorCake from "../assets/sponsorcake.jpeg";
import Surprisebox from "../assets/surprisebox.jpeg";
import Warmblanket from "../assets/Donatewarmblanket.png";
import Eduationkit from "../assets/educationkit.png";
import FeedStrayDogs from "../assets/feedstraydogs.jpeg";
import MonthlyEduacation from "../assets/monthlyexam.jpg";
import DonateSlippers from "../assets/donatesleepers.jpeg";
import DonateNapkin from "../assets/donatenapkin.jpeg";
import ChildCarekit from "../assets/childcarekit.jpeg"
import FeedCows from "../assets/Feedcows.jpeg";
import DonatePlants from "../assets/plantatree.jpeg";
import Milkandbanana from "../assets/milkandbanana.jpeg";
import GiftSchoolbag from "../assets/Giftschoolbag.jpeg";

const HomepageCause = () => {
  const navigate = useNavigate();
  const data = [
    { image: Feedhomeless, title: 'Feed A Homeless Kid', price: '25/- per child' },
    { image: SponsorCake, title: 'Sponser a cake for your special occasion', price: '999/- 2 Cakes' },
    { image: Surprisebox, title: 'Donate a Surprise Box', price: '2500/- 25 Toys' },
    { image: Warmblanket, title: 'Donate a Warm Blanket', price: '199/- per person' },
    { image: Eduationkit, title: 'Donate a Education kit', price: '499/- per kid' },
    { image: FeedStrayDogs, title: 'Feed Stray Dogs', price: '35/- Per dog' },
    { image: MonthlyEduacation, title: 'Sponser a kid Monthly Education', price: '699 for one Month' },
    { image: DonateSlippers, title: 'Donate Slippers to kid', price: '99 for each' },
    { image: DonateNapkin, title: 'Donate Stayfreepad', price: '39/- per women' },
    { image: ChildCarekit, title: 'Donate a Child Care kit', price: '99/- per kit ' },
    { image: FeedCows, title: 'Feed Cows', price: '25/- per cow' },
    { image: DonatePlants, title: 'Donate for plants', price: '49/- per plant' },
    { image: Milkandbanana, title: 'Donate Milk & 2 Banana', price: '30/- per child' },
    { image: GiftSchoolbag, title: 'Gift a School Bag', price: '499/- per kid' },
    { image: 'https://thaagamorg-eb-s3.s3.amazonaws.com/media/deps/causes/card/homeless_card.jpg', title: 'Feed A Homeless Perons', price: '25' },
  ]

  const handleClick = (title) => {
    navigate('/cause_detail', {
      state: { cause: title },
    })

  }
  return (
    <div className='cause_main'>
      <div className='cause-heading-tag'>
        <div>
          <h1>Our Causes</h1>

        </div>

      </div>
      <div className='Maincausecontainer'>
        {data.length > 0 ? (
          data.map((el, key) => (
            <div key={key} className='cause-item' onClick={() => handleClick(el.title)}>
              <div className='image-container'>
                <img src={el.image} alt={el.title} />
                <FaWhatsapp
                  className='whatsapp-icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    const message = encodeURIComponent(`Hi, I want to donate for ${el.title}. How can I proceed?`);
                    const phoneNumber = '918448674560'; 
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                  }}
                />
                <button className='donate-btn'>Donate Now</button>
              </div>
              <div className='cause-title'>
                <h4>{el.title}</h4>
                <p>Rs {el.price}</p>
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
