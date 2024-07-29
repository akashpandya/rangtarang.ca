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
            Join us for a day of joyous celebration and community spirit nestled in the heart of Ajax, Ontario. Gather your loved ones for a day brimming
            with laughter, culinary delights, and cherished moments. Embark on an adventure of color and camaraderie!
          </p>
        </div>
        <div className="event-image right">
          <img src="/images/event_pic2.jpg" alt="Event Pic 2" />
        </div>
      </div>

      {/* New Section */}
      <div className="event-content">
        <div className="event-image left">
          <img src="/images/event_pic3.jpg" alt="Event Pic 3" />
        </div>
        <div className="event-text">
          <h2>Savory Sev Sal and Accompaniments</h2>
          <p>
          A highlight of the picnic lunch is the delicious sev sal served with freshly baked bread. This flavorful dish, rich in spices, is a favorite among attendees. Paired with various accompaniments like tangy pickles, yogurt, and crunchy papad, it creates a delightful culinary experience. The combination of textures and tastes brings a sense of comfort and nostalgia, making it a cherished part of the annual picnic feast.
          </p>
        </div>
        
        <div className="event-image right">
          <img src="/images/event_pic4.jpg" alt="Event Pic 4" />
        </div>
      </div>
      <div className="event-content">
        <div className="event-image left">
          <img src="/images/event_pic5.jpg" alt="Event Pic 5" />
        </div>
        <div className="event-text">
          <h2>Fun and Games for All Ages</h2>
          <p>
            The picnic is a hub of fun and games for people of all ages, singles and couples alike. The diverse array of games fosters a spirit of camaraderie and enjoyment, making the picnic a truly inclusive and joyous event.
          </p>
        </div>
        <div className="event-image right">
          <img src="/images/event_pic6.jpg" alt="Event Pic 6" />
        </div>
      </div>
      <div className="event-content">
        <div className="event-image left">
          <img src="/images/event_pic7.jpg" alt="Event Pic 7" />
        </div>
        <div className="event-text">
          <h2>Even More Fun Activities</h2>
          <p>
            Experience even more exciting activities at our picnic!Don't miss out on
            the fun games and activities that will keep everyone entertained throughout the day.
          </p>
        </div>

        <div className="event-image right">
          <img src="/images/event_pic8.jpg" alt="Event Pic 8" />
        </div>
      </div>
      <div className="event-content">
        <div className="event-image left">
          <img src="/images/event_pic9.jpg" alt="Event Pic 9" />
        </div>
        <div className="event-text">
          <h2>Watermelon Delight and Culinary Joy</h2>
          <p>
          At the yearly Gujarati community picnic, cutting and sharing watermelon is a cherished tradition. Children eagerly gather for their slices, while the elderly savor the juicy treat, reminiscing about past picnics. They also enjoy the entire menu, filled with traditional Gujarati dishes. This event is a celebration of food, memories, and togetherness, bringing joy to everyone involved. </p>
        </div>
        <div className="event-image right">
          <img src="/images/event_pic10.jpg" alt="Event Pic 10" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RangtarangSummerPicnic2024;
