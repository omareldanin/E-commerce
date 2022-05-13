import "./features.scss";
import Link from "../../UI/Link";
import img from "../../../Images/img3.jpg";
import icon1 from "../../../Images/icon1.png";
import icon2 from "../../../Images/icon2.png";
import icon3 from "../../../Images/icon3.png";
import icon4 from "../../../Images/icon4.png";
import icon5 from "../../../Images/icon5.png";
import icon6 from "../../../Images/icon6.png";
const Featurs = () => {
  return (
    <section className="features">
      <div className="row">
        <div className="col-lg">
          <div className="image">
            <img src={img} alt="featuresImage" />
          </div>
        </div>
        <div className="col-lg features-list">
          <h4>Advanced Features</h4>
          <h1>Ultimate Comfort And Best Sound</h1>
          <ul>
            <li>
              <img src={icon1} alt="icon1" />
              <span>Bluetooth connectivity</span>
            </li>
            <li>
              <img src={icon2} alt="icon2" />
              <span>Wireless headphones</span>
            </li>
            <li>
              <img src={icon3} alt="icon3" />
              <span>Long lasting battery</span>
            </li>
            <li>
              <img src={icon4} alt="icon4" />
              <span>Higher water & dust resistance</span>
            </li>
            <li>
              <img src={icon5} alt="icon5" />
              <span>One touch control</span>
            </li>
            <li>
              <img src={icon6} alt="icon6" />
              <span>Active noise cancelling</span>
            </li>
          </ul>
          <Link path="#">Buy Now</Link>
        </div>
      </div>
    </section>
  );
};
export default Featurs;
