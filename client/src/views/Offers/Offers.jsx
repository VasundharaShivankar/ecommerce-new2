import React from 'react';
import './Offers.css';
import Navbar from '../../components/Navbar/Navbar'
import offersimg from './images/offers.jpg'
import offer1 from './images/offer1.webp'
import offer2 from './images/offer2.webp'
import offer3 from './images/offer3.webp'
import offer4 from './images/offer4.webp'
import offer5 from './images/offer5.webp'

const offers = [
  {
    title: "Upto 50% Off on Living Room Furniture",
    description: "Upgrade your living room with stylish furniture at unbeatable prices.",
    imageUrl: "offer1",
  },
  {
    title: "20% Off on Bedroom Essentials",
    description: "Sleep in style with our exclusive bedroom furniture and accessories.",
    imageUrl: "bedroom-offer.jpg",
  },
  {
    title: "Buy 1 Get 1 Free on Decor Items",
    description: "Enhance your home decor with our BOGO offer on select items.",
    imageUrl: "decor-offer.jpg",
  },
  {
    title: "30% Off on Modular Kitchen Sets",
    description: "Revamp your kitchen with our modular kitchen sets at discounted rates.",
    imageUrl: "kitchen-offer.jpg",
  },
];

const Offers = () => {
  return (
    <div className="offers-container">
        <img src={offersimg} style={
            {height:'500px', margin:'auto', width:'100%'}
        }/>
    <Navbar/>
      <h2 className="offers-title">Exclusive Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
