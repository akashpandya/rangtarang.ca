import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Upcoming Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/family_event.png" text="Join now!" label="RangTarang Summer Picnic 2024" path="/Events" />
          </ul>
          <h1>RangTarang Clubs</h1>
          <ul className="cards__items">
            <CardItem src="images/karaoke.jpg" text="Join us for monthly Karaoke nights!" label="karaoke Club" path="/Karaokeclub" />
            <CardItem src="images/kids.jpg" text="Where Oshawa's young explorers embark on endless adventures!" label="Kids Club" path="/kidsclub" />
            <CardItem src="images//seniors.jpg" text="Connecting Oshawa's seniors through friendship and fun!!" label="Senior's Club" path="/Seniorsclub" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
