import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Phone: +1 234 567 890</p>
          <p>Email: support@homedecor.com</p>
          <p>Address: 123 Home Decor St, Suite 456, New York, NY 10001</p>
        </div>
        
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section payment-options">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="Mastercard" />
            <img src="/images/paypal.png" alt="Paypal" />
            <img src="/images/amex.png" alt="American Express" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Home Decor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
