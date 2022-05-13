import "./testimonials.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import { Pagination } from "swiper";
import test1 from "../../../Images/test-1_large.webp";
import test2 from "../../../Images/test-2_large.webp";
import test3 from "../../../Images/test-3_large.webp";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="head">
          <span></span>
          <p>Magical Listening Experience</p>
          <h1>Wireless Headphones & Ear-Buds Are Comfort & Fit</h1>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-md-5">
                <div className="image">
                  <img src={test1} alt="test1" />
                </div>
              </div>
              <div className="col-md-7">
                <p>
                  Pharetra sit amet aliquam id diam. Cum sociis natoque
                  penatibus et magnis. Eget nullam non nisi est sit amet
                  facilisis magna. Odio morbi quis justo donec commodo odio
                  aenean sed adipiscing diam donec. Sit amet justo donec enim
                  diam vulputate ut pharetra sit. Ipsum a arcu cursus vitae
                  congue.
                </p>
                <h4>Melvin Powell - Norway</h4>
                <span></span>
                <p>Marketing Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="row">
              <div className="col-md-5">
                <div className="image">
                  <img src={test2} alt="test1" />
                </div>
              </div>
              <div className="col-md-7">
                <p>
                  Vulputate mi sit amet mauris commodo quis imperdiet. Dolor
                  purus non enim praesent elementum facilisis leo. Maecenas
                  volutpat blandit aliquam etiam erat velit scelerisque in. Ac
                  felis donec et odio pellentesque diam volutpat commodo sed.
                  Ipsum consequat nisl vel pretium lectus quam id leo.
                </p>
                <h4>Erica Ryan - UK</h4>
                <span></span>
                <p>Fitness Coach</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="row">
              <div className="col-md-5">
                <div className="image">
                  <img src={test3} alt="test1" />
                </div>
              </div>
              <div className="col-md-7">
                <p>
                  Odio morbi quis commodo odio aenean sed adipiscing diam donec.
                  Sit amet justo donec enim diam vulputate ut pharetra sit.
                  Ipsum a arcu cursus vitae congue.&nbsp;Pharetra sit amet
                  aliquam id diam. Cum sociis natoque penatibus et magnis. Eget
                  nullam non nisi est sit amet facilisis magna.{" "}
                </p>
                <h4>ALicia Woods - USA</h4>
                <span></span>
                <p>Fashion Designer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
