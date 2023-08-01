import { Link } from "react-router-dom";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video_bg_home_1.mp4" autoPlay loop muted />
      <p>We are friends</p>
      <span className="hero-underline"></span>
      <h1>RANGTARANG GROUP</h1>
      <div className="hero-btns">
        <Link to="/Events">
          <Button className="btns" buttonStyle="btn--outline" buttonsize="btn--large">
            Learn More
          </Button>
        </Link>
        <Link to="/Events">
          <Button className="btns" buttonStyle="btn--primary" buttonsize="btn--large">
            Upcoming Events
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default HeroSection;
