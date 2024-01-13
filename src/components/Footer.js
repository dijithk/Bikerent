import React from 'react';

function Footer() {
  return (
    <div>
    <footer style={{ backgroundColor: '#a1c7b5', color: '#333', padding: '20px', textAlign: 'center' }}>
      <div className="company-details">
        <h2 style={{ color: '#333' }}>LetEasy Rentals</h2>
        <p>Your go-to place for bike and schooty rentals</p>
      </div>

      <div className="contact-info">
        <p style={{ color: '#333' }}><strong>Contact us:</strong></p>
        <p><span role="img" aria-label="map-marker">📍</span> 123 Main Street, Cityville, Country</p>
        <p><span role="img" aria-label="envelope">✉️</span> info@abcrentals.com</p>
        <p><span role="img" aria-label="phone">📞</span> +1 (123) 456-7890</p>
      </div>

      <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
              <i className="fab fa-facebook"></i>
            
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
          </div>
          </div>


      <div className="copyright" style={{ marginTop: '20px', color: '#333' }}>
        <p>&copy; 2023 LetEasy Rentals. All rights reserved.</p>
      </div>
    </footer>

    



    </div>
  );
}

export default Footer;
