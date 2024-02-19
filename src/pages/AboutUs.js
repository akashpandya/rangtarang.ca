import Footer from "../Footer";
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="div">
      <div class="profile-area">
        <div class="container" id="aboutus">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="img1">
                  <img src="/images/a1.jpg" alt="" />
                </div>
                <div class="img2">
                  <img src="/images/1.png" alt="" />
                </div>
                <div class="main-text">
                  <h2>Ashish Pandya</h2>
                  <p>
                    Ashish Pandya, a visionary leader and co-founder of RangTarang, is dedicated to bringing the vibrant Indian culture to life in Canada. With
                    his passion for community engagement, he has played a pivotal role in organizing unforgettable family-friendly events on holidays and
                    special Indian festivals.
                  </p>
                </div>
                <div class="social-icons">
                  <Link class="social-icon-link facebook" to="https://www.facebook.com/ashish.pandya.509" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link class="social-icon-link instagram" to="https://www.instagram.com/ashish000/" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram" />
                  </Link>

                  <Link class="social-icon-link twitter" to="https://twitter.com/Ashish000" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter" />
                  </Link>
                  <Link class="social-icon-link linkedin" to="https://www.linkedin.com/in/ashish-pandya-9ab19b74/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="img1">
                  <img src="/images/a2.jpg" alt="" />
                </div>
                <div class="img2">
                  <img src="/images/2.png" alt="" />
                </div>
                <div class="main-text">
                  <h2>Purnendu Adhvaryu</h2>
                  <p>
                    Meet Purnendu Adhvaryu, a co-founder of RangTarang, whose creative genius breathes life into every event. His expertise in event planning
                    and his commitment to preserving Indian traditions have made RangTarang's celebrations a source of joy for families across Canada.
                  </p>
                </div>
                <div class="social-icons">
                  <Link class="social-icon-link facebook" to="https://www.facebook.com/purnendu.adhvaryu" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link class="social-icon-link instagram" to="https://www.instagram.com/purnenduadhvaryu/" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram" />
                  </Link>

                  <Link class="social-icon-link twitter" to="https://twitter.com/PADHV20" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter" />
                  </Link>
                  <Link class="social-icon-link linkedin" to="https://www.linkedin.com/in/purnendu-adhvaryu-02534989/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="img1">
                  <img src="/images/a3.jpg" alt="" />
                </div>
                <div class="img2">
                  <img src="/images/3.png" alt="" />
                </div>
                <div class="main-text">
                  <h2>Yogesh Parekh</h2>
                  <p>
                    Yogesh Parekh, one of the driving forces behind RangTarang, is known for his meticulous planning and attention to detail. As a co-founder,
                    he ensures that every event is a seamless blend of cultural richness and family entertainment, making them a cherished part of the Indian
                    community in Canada.
                  </p>
                </div>
                <div class="social-icons">
                  <Link class="social-icon-link facebook" to="https://www.facebook.com/yogesh.parekh.184" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link class="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram" />
                  </Link>

                  <Link class="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter" />
                  </Link>
                  <Link class="social-icon-link linkedin" to="/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="img1">
                  <img src="/images/a4.jpg" alt="" />
                </div>
                <div class="img2">
                  <img src="/images/4.jpeg" alt="" />
                </div>
                <div class="main-text">
                  <h2>Bharat Patel</h2>
                  <p>
                    Bharat Patel, co-founder of RangTarang, is a passionate advocate for promoting Indian culture and heritage in Canada. His dedication to
                    creating inclusive and enjoyable experiences during festivals and holidays has brought the Indian community together, fostering a sense of
                    unity and celebration.
                  </p>
                </div>
                <div class="social-icons">
                  <Link class="social-icon-link facebook" to="https://www.facebook.com/Rangtarangcanada" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f" />
                  </Link>
                  <Link class="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram" />
                  </Link>

                  <Link class="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                    <i class="fab fa-twitter" />
                  </Link>
                  <Link class="social-icon-link linkedin" to="https://www.linkedin.com/in/bharatpatel9/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;
