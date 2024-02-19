import React, { useState } from "react";
import Button from "./components/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    setIsSubscribed(true);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the Adventure newsletter to receive our best vacation deals</p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form action="https://formspree.io/f/maygqvkb" method="POST" onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" value={email} onChange={handleEmailChange} />
            <input type="hidden" name="_cc" value="your-email@example.com" />
            <Button buttonStyle="btn--outline" type="submit">
              Subscribe
            </Button>
          </form>
          {isSubscribed ? <p>You have successfully subscribed!</p> : null}
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/Contact">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="navbar-logo">
              <img className="navbar-logo-image" src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="text-footer">
            <small class="website-rights">112 Harrisview Street, Ajax ON Canada| Phone: 4165704146 | Email: info@rangtarang.ca </small>
            <small class="website-rights">Copyright © 2023 RangTarang</small>
          </div>
          <div class="social-icons">
            <Link class="social-icon-link facebook" to="https:/www.facebook.com/Rangtarangcanada" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f" />
            </Link>
            <Link class="social-icon-link instagram" to="https://www.instagram.com/ashish000" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube" to="https://www.facebook.com/Rangtarangcanada/videos" target="_blank" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
