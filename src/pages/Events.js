import Footer from "../Footer";
import "add-to-calendar-button";
import "../App.css";
function Events() {
  return (
    <div className="">
      <div className="events">
        <div className="event1">
          <img src="\images\img_event_1.jpg" alt="img_event_1" className="images_events" />
          <h1>RangTarang Senior' Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum quis unde eveniet tempore fugit cupiditate illum. Unde, quo. Corporis
            ratione vitae reiciendis delectus, consectetur quis asperiores voluptate? Dolor, nam?
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
        <div className="event2">
          <img src="\images\img_event_2.jpg" alt="img_event_2" className="images_events" />
          <h1>RangTarang Karaoke Night</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum quis unde eveniet tempore fugit cupiditate illum. Unde, quo. Corporis
            ratione vitae reiciendis delectus, consectetur quis asperiores voluptate? Dolor, nam?
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
        <div className="event3">
          <img src="\images\img_event_3.jpg" alt="img_event_3" className="images_events" />
          <h1>RangTarang Kids' Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum quis unde eveniet tempore fugit cupiditate illum. Unde, quo. Corporis
            ratione vitae reiciendis delectus, consectetur quis asperiores voluptate? Dolor, nam?
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
        <div className="event4">
          <img src="\images\img_event_4.jpg" alt="img_event_2" className="images_events" />
          <h1>RangTarang Ladies' Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum quis unde eveniet tempore fugit cupiditate illum. Unde, quo. Corporis
            ratione vitae reiciendis delectus, consectetur quis asperiores voluptate? Dolor, nam?
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
export default Events;
