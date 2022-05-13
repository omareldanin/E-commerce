import "./services.scss";
import Link from "../UI/Link";
import service1 from "../../Images/service-4.webp";
import service2 from "../../Images/service-3.webp";
import service3 from "../../Images/service-2.webp";
import service4 from "../../Images/service-1.webp";
import service5 from "../../Images/service-5.webp";
import service6 from "../../Images/service-6.webp";
import service7 from "../../Images/service-7.webp";
import service8 from "../../Images/service-8.webp";
import Video from "../Home/video/Video";
const Services = () => {
  const title = document.getElementsByTagName("title");
  title[0].innerText = "Service - Boom Theme";
  return (
    <>
      <div className="service-header center">
        <h1>SERVICE</h1>
        <p>Home / Service</p>
      </div>
      <div className="service1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img">
                <img src={service1} alt="service1" />
                <div className="desc center">
                  <h1>Good Functions</h1>
                  <p>
                    Vitae congue mauris rhoncus aenean vel elit. Mauris pharetra
                    et ultrices neque non odio euismod lacinia atmt risus.
                  </p>
                  <Link path="#">View More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img">
                <img src={service2} alt="service2" />
                <div className="desc center">
                  <h1>New Bass Beat</h1>
                  <p>
                    Aliquet enim tortor at auctor urna nunc. Tempus imperdiet
                    nulla malesuada pellentesque elit eget gravida.
                  </p>
                  <Link path="#">View More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img">
                <img src={service3} alt="service3" />
                <div className="desc center">
                  <h1>Affordable Buds</h1>
                  <p>
                    Urna neque viverra justo nec ultrices dui sapien eget. Quam
                    nulla porttitor massa id neque aliquam vestibulum duis
                  </p>
                  <Link path="#">View More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img">
                <img src={service4} alt="service4" />
                <div className="desc center">
                  <h1>Sound Quality</h1>
                  <p>
                    Lectus nulla at volutpat diam. Accumsan sit amet nulla
                    facilisi morbi. Dictum varius duis sectetur lorem donec
                  </p>
                  <Link path="#">View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video />
      <div className="service2">
        <div className="container">
          <h1>Grab Your Needs</h1>
          <div className="row">
            <div className="col-lg">
              <div className="image">
                <img src={service5} alt="service5" />
                <div className="desc center">
                  <h1>Safe Listening Processor</h1>
                  <p>
                    Diam maecenas sed enim ut sem viverra aliquet eget. Duis
                    ultricies lacus sed turpis tincidunt id aliquet.
                    Pellentesque diam volutpat commodo sed egestas gravid
                  </p>
                  <Link path="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="item">
                <img src={service6} alt="service6" />
                <div className="desc center">
                  <h1>Go User Friendly</h1>
                  <Link path="#">Read More</Link>
                </div>
              </div>
              <div className="item">
                <img src={service7} alt="service7" />
                <div className="desc center">
                  <h1>Simple Ear Reach</h1>
                  <Link path="#">Read More</Link>
                </div>
              </div>
              <div className="item">
                <img src={service8} alt="service8" />
                <div className="desc center">
                  <h1>Good Music Parts</h1>
                  <Link path="#">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
