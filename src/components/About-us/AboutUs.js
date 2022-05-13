import "./aboutUs.scss";
import image from "../../Images/img-1a_960x.png";
import about1 from "../../Images/about-1.webp";
import about2 from "../../Images/about-2.webp";
import about3 from "../../Images/about-3.webp";
import about4 from "../../Images/about-4.webp";
import team1 from "../../Images/team-4.webp";
import team2 from "../../Images/team-3.webp";
import team3 from "../../Images/team-2.webp";
import team4 from "../../Images/team-1.webp";
import { NavLink } from "react-router-dom";
import Link from "../UI/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const AboutUs = () => {
  const title = document.getElementsByTagName("title");
  title[0].innerText = "About - Boom Theme";
  return (
    <>
      <div className="about-header center">
        <h1>ABOUT</h1>
        <p>Home / About</p>
      </div>
      <div className="about1">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <img src={image} alt="earphone" />
            </div>
            <div className="col-lg ">
              <div className="specifications-items">
                <div>
                  <h4>Wireless Ear Buds</h4>
                  <p>Feugiat nisl pretium fuesce</p>
                </div>
                <div>
                  <h4>Bluetooth Ear Shot</h4>
                  <p>Sollicitudin aliquam ultrices</p>
                </div>
                <div>
                  <h4>High-Quality Sound</h4>
                  <p>Act orci phasellus eges llus</p>
                </div>
                <div>
                  <h4>Smooth Sound Base</h4>
                  <p>Etiam dignissim diam quis</p>
                </div>
                <div>
                  <h4>Hands-Free Talk</h4>
                  <p>Aliquam sem fringilla morbi</p>
                </div>
                <div>
                  <h4>Relax Tuned Lists</h4>
                  <p>Nibh tortor id aliquet lectu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="container">
          <h1>Explore Our Collections</h1>
          <div className="row">
            <div className="col-md">
              <img src={about1} alt="about1" />
              <div className="desc center">
                <h2>Reliable Music</h2>
                <p>
                  Adipiscing diam donec adipiscing tristique risus nec feugiat
                  in sit amet sit amet justo
                </p>
              </div>
            </div>
            <div className="col-md">
              <img src={about2} alt="about2" />
              <div className="desc center">
                <h2>Soft Rhythm</h2>
                <p>
                  Ultrices mi tempus imperdiet nulla malesuada pellentesque
                  elit.Aliquam faucibus massa purusets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src={about3} alt="about3" />
            </div>
            <div className="col-lg-7">
              <h1>Music Therapy</h1>
              <p>
                Interdum velit laoreet id donec ultrices tincidunt arcu non.
                Justo laoreet sitamet cursus sit amet dictumsita.
              </p>
              <Link path="/bolgs">Read More</Link>
            </div>
          </div>
          <div className="row row2">
            <div className="col-lg-5">
              <img src={about4} alt="about4" />
            </div>
            <div className="col-lg-7">
              <h1>Fuse Music</h1>
              <p>
                Diam sollicitudin tempor id eu nisl nunc mi ipsum. Nam aliquam
                sem et tortor consequat id porta tortornih.
              </p>
              <Link path="/bolgs">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about4">
        <div className="container">
          <h1>Our Team</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <div className="image">
                <img src={team1} alt="team1" />
                <div className="socials">
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faYoutube} />
                  </NavLink>
                </div>
              </div>
              <h4>Ala Olivia</h4>
              <p>CEO</p>
            </div>
            <div className="col">
              <div className="image">
                <img src={team2} alt="team2" />
                <div className="socials">
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faYoutube} />
                  </NavLink>
                </div>
              </div>
              <h4>George Leo</h4>
              <p>Project Manager</p>
            </div>
            <div className="col">
              <div className="image">
                <img src={team3} alt="team3" />
                <div className="socials">
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faYoutube} />
                  </NavLink>
                </div>
              </div>
              <h4>Amelia Jacky</h4>
              <p>Production Controller</p>
            </div>
            <div className="col">
              <div className="image">
                <img src={team4} alt="team4" />
                <div className="socials">
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </NavLink>
                  <NavLink to="#" className="center">
                    <FontAwesomeIcon icon={faYoutube} />
                  </NavLink>
                </div>
              </div>
              <h4>Daniel Arthur</h4>
              <p>Store Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
