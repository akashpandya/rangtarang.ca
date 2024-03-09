import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Karaokeclub from "./pages/Karaokeclub";
import kidsclub from "./pages/Kidsclub";
import Seniorsclub from "./pages/Seniorsclub";
import Sportsclub from "./pages/Sportsclub";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About_us" exact Component={AboutUs} />
        <Route path="/Events" exact Component={Events} />
        <Route path="/Clubs" exact Component={Clubs} />
        <Route path="/Contact" exact Component={Contact} />
        <Route path="/kidsclub" exact Component={kidsclub} />
        <Route path="/Seniorsclub" exact Component={Seniorsclub} />
        <Route path="/Karaokeclub" exact Component={Karaokeclub} />
        <Route path="/Sportsclub" exact Component={Sportsclub} />
      </Routes>
    </Router>
  );
}

export default App;
