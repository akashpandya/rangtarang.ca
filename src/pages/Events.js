import Footer from "../Footer";
import "add-to-calendar-button";
import "../App.css";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="events_cover">
      <div className="events">
        <div className="carousel-container">
          <h1 className="h1">Upcoming Events</h1>

          <div className="carousel-item">
            <Link to="/RangtarangSummerPicnic2024">
              {/* Updated the src to use Jitu.jpg */}
              <img src="images/Jitu.jpg" alt="img_event_2" className="images_events" />
              <div className="carousel-text">
                <h2>RangTarang Navratri 2024</h2>
                <p>
                GTA's most original Malhar Group performed traditional ગરબા, રાસ, સનેડો and much more. Please called committee members to book admission passes.
                Saw attached flyer for more information. Admission Fee: $ 10 per person (Age 5 and above). Friday 20th October, 2023 @ Audely Recreation Center
                Banquet Hall, 1955 Audely Road in Ajax from 7.00 PM onwards. This event was sold out.
                </p>
              </div>
            </Link>
          </div>

          <h1 className="h1">Past Events</h1>

          <div className="carousel-item">
            <Link to="/Karaoke2024">
              <img src="images/karaoke.jpg" alt="img_event_2" className="images_events" />
              <div className="carousel-text">
                <h2>Melodies of the Night: Community Karaoke Event</h2>
                <p>
                The community came together for a memorable karaoke night, singing both classic Bollywood hits and popular new songs. The atmosphere was electric as everyone, young and old, took turns at the microphone, showcasing their vocal talents. The event was a resounding success, filled with laughter, music, and a shared love for singing. It was a night of unity and joy, where the community bonded over the timeless magic of music.
                </p>
              </div>
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/RangtarangSummerPicnic2024">
              <img src="images/family_event.png" alt="img_event_2" className="images_events" />
              <div className="carousel-text">
                <h2>RangTarang Summer Picnic 2024</h2>
                <p>
                  Step into a world of summertime delight at Rangtarang's 2024 picnic extravaganza! Join us for a day of joyous celebration and community spirit
                  nestled in the heart of Ajax, Ontario. Our picnic promises a fusion of activities catering to all ages, from thrilling games and delectable
                  cuisine to captivating cultural showcases that will transport you to distant lands. Save the date and gather your loved ones for a day brimming
                  with laughter, culinary delights, and cherished moments. Embark on an adventure of color and camaraderie - this year's picnic is an event you
                  won't want to miss!
                </p>
              </div>
            </Link>
          </div>

          <div className="carousel-item">
            <img src="\images\img_event1_1.jpg" alt="img_event1_1" className="images_events" />
            <div className="carousel-text">
              <h2>RangTarang Group Garba 2023</h2>
              <p>
                GTA's most original Malhar Group performed traditional ગરબા, રાસ, સનેડો and much more. Please called committee members to book admission passes.
                Saw attached flyer for more information. Admission Fee: $ 10 per person (Age 5 and above). Friday 20th October, 2023 @ Audely Recreation Center
                Banquet Hall, 1955 Audely Road in Ajax from 7.00 PM onwards. This event was sold out.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="images/cards_1.jpg" alt="img_event_2" className="images_events" />
            <div className="carousel-text">
              <h2>RangTarang Summer Picnic 2023</h2>
              <p>
                Celebrated the colors of summer at Rangtarang's 2023 picnic event! Joined us for a day of vibrant fun and togetherness in the heart of Ajax,
                Ontario. Our picnic promised a kaleidoscope of activities for all ages, from exciting games and delicious food to cultural performances that
                dazzled your senses. Marked your calendars and brought your family and friends for a day filled with laughter, great food, and unforgettable
                memories. Didn't miss out on this colorful extravaganza!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Events;
