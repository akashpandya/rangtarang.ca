import Footer from "../Footer";
import "add-to-calendar-button";
import "../App.css";
import { Link } from "react-router-dom";

function Clubs() {
  return (
    <div className="container_clubs">
      <div className="clubs">
        <div className="club">
          <Link to="/Kidsclub"><img src="\images\img_event_3.jpg" alt="img_event_3" className="images_events" /></Link>
          <h1>RangTarang Kids' Club</h1>

          <p>
            Welcome to Kid's Club, the ultimate weekly gathering spot for kids in Ajax, Ontario, Canada! At Kid's Club, we believe that every child deserves a
            fun and supportive community to grow, learn, and make new friends.
          </p>
          <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="World Wide Web"
            startDate="2023-08-07"
            endDate="2023-08-07"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
          ></add-to-calendar-button>
        </div>

        <div className="club">
          <Link to="/Seniorsclub"><img src="\images\seniors.jpg" alt="img_event_1" className="images_events" /></Link>
          <h1>RangTarang Senior' Club</h1>
          <p>
            Join us every week at Senior's Club, a welcoming gathering designed exclusively for seniors in Ajax, Ontario, Canada. This delightful event provides
            a warm and friendly environment for seniors to come together, share stories, and build lasting connections.
          </p>
          <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="World Wide Web"
            startDate="2023-08-07"
            endDate="2023-08-07"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
          ></add-to-calendar-button>
        </div>
        <div className="club">
          <Link to="/Sportsclub"><img src="\images\sports.jpg" alt="img_event_3" className="images_events" /></Link>
          <h1>RangTarang Sports Club</h1>
          <p>
            Get active with RangTarang Sports Club! Join us for weekly sports activities and games in Ajax, Ontario, Canada. Whether you're into Cricket,
            soccer, or tennis, there's something for everyone to enjoy and stay fit.
          </p>
          <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="World Wide Web"
            startDate="2023-08-07"
            endDate="2023-08-07"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
          ></add-to-calendar-button>
        </div>
        <div className="club">
          <Link to="/Karaokeclub"><img src="\images\karaoke.jpg" alt="img_event_3" className="images_events" /></Link>
          <h1>RangTarang Karaoke Club</h1>
          <p>
            Sing your heart out at RangTarang Karaoke Club! Join us for a night of music, fun, and unforgettable performances in Ajax, Ontario, Canada. Whether
            you're a seasoned performer or just want to enjoy some tunes with friends, our karaoke nights are not to be missed.
          </p>
          <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="World Wide Web"
            startDate="2023-08-07"
            endDate="2023-08-07"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
          ></add-to-calendar-button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Clubs;
