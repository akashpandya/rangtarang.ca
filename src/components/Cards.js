import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Upcoming Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cards_1.jpg"
              text="Let's Join with family and friends $25/person and Kids under Age 5 are free!"
              label="RangTarang Summer Picnic 2023"
              path="/Events"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/karaoke.jpg" text="Join us for monthly Karaoke nights!" label="karaoke Club" path="/Events" />
            <CardItem src="images/kids.jpg" text="RangTarang Group's Kids' Club!" label="Kids Club" path="/Events" />
            <CardItem src="images//seniors.jpg" text="RangTarang Groups' Seniors' Club!" label="Senior's Club" path="/Events" />
            <CardItem src="images/ladies'club.jpg" text="RangTarang Groups' Ladies Club" label="Ladies' Club" path="/Events" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
