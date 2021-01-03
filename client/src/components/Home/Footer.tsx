import React from 'react';
import '../../styles/Footer.scss';

//©
export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="Footer">
      <div className="Footer__form">
        <h4 className="Footer__formHeader">Contact Us</h4>
        <div className="footer__form">
          <input className="footer__formField" type="email" placeholder="Email" />
          <input className="footer__formField" type="text" placeholder="Subject" />
          <input className="footer__formField" type="text" placeholder="message" />
          <button className="footer-form-btn">Send Message</button>
        </div>
      </div>
      <div className="Footer__comapanyName">
        <h5>Hlongwane Properties © {currentYear}</h5>
      </div>
    </div>
  );
};
