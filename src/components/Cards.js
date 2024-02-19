import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Upcoming Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/img_event1_1.jpg" text="Sold Out!" label="RangTarang Navratri Garba 20th October 2023" path="/Events" />
          </ul>
          <h1>RangTarang Clubs</h1>
          <ul className="cards__items">
            <CardItem src="images/karaoke.jpg" text="Join us for monthly Karaoke nights!" label="karaoke Club" path="/Events" />
            <CardItem src="images/kids.jpg" text="Where Oshawa's young explorers embark on endless adventures!" label="Kids Club" path="/Events" />
            <CardItem src="images//seniors.jpg" text="Connecting Oshawa's seniors through friendship and fun!!" label="Senior's Club" path="/Events" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
