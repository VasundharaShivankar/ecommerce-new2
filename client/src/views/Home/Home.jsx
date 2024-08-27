import React from 'react';
import './Home.css'
import bgimg from './bgimg.jpg';
import front from './front.jpg';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="overlay">
          <h1>Welcome to Neighbour Net</h1>
          <p>
            Transform Your Space into a Sanctuary with Our Curated Home Decor Collection.
            Elevate Every Room with Unique, Timeless Pieces Crafted to Inspire and Delight.
          </p>
          <Link to="/shop" className="primary-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <img src={front} alt="Community" />
          <h3>Join the Community</h3>
          <p>
            Become a part of our vibrant community and stay updated with the latest trends and offers.
          </p>
          <Link to="/community" className="secondary-button">
            Learn More
          </Link>
        </div>
        <div className="feature-card">
          <img src={front} alt="Quality Products" />
          <h3>Quality Products</h3>
          <p>
            Explore our wide range of high-quality home decor products that suit every style and budget.
          </p>
          <Link to="/products" className="secondary-button">
            Explore Products
          </Link>
        </div>
        <div className="feature-card">
          <img src={front} alt="Exclusive Offers" />
          <h3>Exclusive Offers</h3>
          <p>
            Sign up for our newsletter and get access to exclusive deals and discounts.
          </p>
          <Link to="/offers" className="secondary-button">
            View Offers
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive the latest updates and offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="primary-button">
            Subscribe
          </button>
        </form>
      </section>
      <Footer/>
    </div>
   
  );
}

export default Home;
