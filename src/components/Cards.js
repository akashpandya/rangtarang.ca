import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Upcoming Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Updated the src to use Jitu.jpg */}
            <CardItem src="images/Jitu.jpg" text="Join now!" label="RangTarang Navratri Event 2024" path="/Events" />
          </ul>
          <h1>RangTarang Navratri 2024</h1>
          <ul className="cards__items">
            <CardItem src="images/karaoke.jpg" text="Join us for monthly Karaoke nights!" label="karaoke Club" path="/Karaokeclub" />
            <CardItem src="images/kids.jpg" text="Where Oshawa's young explorers embark on endless adventures!" label="Kids Club" path="/kidsclub" />
            <CardItem src="images/seniors.jpg" text="Connecting Oshawa's seniors through friendship and fun!" label="Senior's Club" path="/Seniorsclub" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
