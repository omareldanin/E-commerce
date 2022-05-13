import "./about.scss";
import about1 from "../../../Images/img-1a_960x.png";
import about2 from "../../../Images/img-2_960x.png";
import Link from "../../UI/Link";
const About = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={about1} alt="about1" />
          </div>
          <div className="col-md-6 product-info">
            <h4>Simply awesome</h4>
            <h2>Amazing music gadgets for music lovers</h2>
            <p>
              Sed viverra ipsum nunc aliquet bibendum. Viverra ipsum nunc
              aliquet bibendum enim facilisis gravida neque. Imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper.
            </p>
            <Link className="shopUrl" path="/shop">
              Shop now{" "}
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 product-info">
            <h4>Simply awesome</h4>
            <h2>Amazing music gadgets for music lovers</h2>
            <p>
              Sed viverra ipsum nunc aliquet bibendum. Viverra ipsum nunc
              aliquet bibendum enim facilisis gravida neque. Imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper.
            </p>
            <Link className="shopUrl" path="/shop">
              Shop now
            </Link>
          </div>
          <div className="col-md-6">
            <img src={about2} alt="about2" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
