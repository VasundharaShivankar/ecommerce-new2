import React from 'react';
import './Events.css'
import summerfestival from './images/summer.avif'
import charity from './images/charity.avif'
import food from './images/food.avif'
import fitness from './images/fitness.avif'
import { useState } from 'react';
import Navbar from './../../components/Navbar/Navbar'
const Events = () => {
  return (
    <div className="events-page">
    <Navbar />
      <h1 className="events-page-heading">Community Events</h1>
      <div className="events-container">
        <div className="event-card">
            <img src={summerfestival}/>
          <h2 className='text-balance ...'>Event 1: Summer Festival</h2>
          <p>Date: August 30th</p>
          <p>Time: 12pm - 4pm</p>
          <p>Location: Community Park</p>
        </div>

        <div className="event-card">
        <img src={charity}/>
          <h2>Event 2: Charity Run</h2>
          <p>Date: August 30th</p>
          <p>Time: 8am - 10am</p>
          <p>Location: Downtown Area</p>
        </div>
        <div className="event-card">
        <img src={food}/>
          <h2>Event 3: Food Drive</h2>
          <p>Date: September 17th</p>
          <p>Time: 10am - 2pm</p>
          <p>Location: Community Center</p>
        </div>
        <div className="event-card">
        <img src={fitness}/>
          <h2>Event 4: Fitness Challenges</h2>
          <p>Date: September 24th</p>
          <p>Time: 10am - 2pm</p>
          <p>Location: Community Center</p>
        </div>  
        <div className="event-card">
        <img src={fitness}/>
          <h2>Event 5: Cycling Challenges</h2>
          <p>Date: September 30th</p>
          <p>Time: 10am - 2pm</p>
          <p>Location: Community Center</p>
        </div>
        <div className="event-card">
        <img src={fitness}/>
          <h2>Event 6:Dance Fitness Parties</h2>
          <p>Date: October 15th</p>
          <p>Time: 10am - 2pm</p>
          <p>Location: Community Center</p>
        </div>
      </div>
     
    </div>
  );
};

export default Events;
