import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="navbar-logo-image" src="/images/logo.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About_Us" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links-mobile" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        {button && (
          <Link to="/Contact">
            <Button buttonStyle="btn--outline" onClick={handleClick}>
              Contact us
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
