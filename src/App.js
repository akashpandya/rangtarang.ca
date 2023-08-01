import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/About_us" exact Component={AboutUs} />
        <Route path="/Events" exact Component={Events} />
        <Route path="/Contact" exact Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
