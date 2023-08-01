import Button from "./Button";
import { Link } from "react-router-dom";
import "./Join.css";
function Join() {
  return (
    <div className="join-image">
      <h3>Join the Team</h3>
      <p>As we are not for profit and growing we always looking for volunteers. So please join the team and help your community.</p>
      <Link to="/Contact">
        <Button buttonStyle="btn--primary">Learn More</Button>
      </Link>
    </div>
  );
}
export default Join;
