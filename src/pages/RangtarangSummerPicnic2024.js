import Footer from "../Footer";
import "../App.css";
import "./RangtarangSummerPicnic2024.css";

function RangtarangSummerPicnic2024() {
  return (
    <div className="event-page">
      <div className="event-content">
        <div className="event-image left">
          <img src="/images/event_pic1.jpg" alt="Event Pic 1" />
        </div>
        <div className="event-text">
          <h1>RangTarang Summer Picnic 2024</h1>
          <p>
            Step into a world of summertime delight at Rangtarang's 2024 picnic extravaganza! Join us for a day of joyous celebration and community spirit
            nestled in the heart of Ajax, Ontario. Our picnic promises a fusion of activities catering to all ages, from thrilling games and delectable
            cuisine to captivating cultural showcases that will transport you to distant lands. Save the date and gather your loved ones for a day brimming
            with laughter, culinary delights, and cherished moments. Embark on an adventure of color and camaraderie - this year's picnic is an event you
            won't want to miss!
          </p>
        </div>
        <div className="event-image right">
          <img src="/images/event_pic2.jpg" alt="Event Pic 2" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RangtarangSummerPicnic2024;
