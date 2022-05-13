import "./header.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss";
import { Navigation } from "swiper";
import SlideItem from "./SlideItem";
import slide1 from "../../../Images/slide1.png";
import slide1Mobile from "../../../Images/slide1img.jpg";
import slide2 from "../../../Images/slide2.png";
import slide2Mobile from "../../../Images/slide2img.png";
import slide3 from "../../../Images/slide.png";
import slide3Mobile from "../../../Images/slide3img.webp";
const Header = () => {
  return (
    <div className="header">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideItem
            image={slide1}
            mobileImage={slide1Mobile}
            h4="Stay Tuned"
            h2="Overdose On Music. Overdose On Quality "
            p="Headphones so good, you will not want to take it off.Leaving home without headphones would
                be a mistake."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            image={slide2}
            mobileImage={slide2Mobile}
            h4="Feel The Rhythm "
            h2="Spark Up Your Passion With Good Music."
            p="Headphones so good, you will not want to take it off.Leaving home without headphones would
                be a mistake."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            image={slide3}
            mobileImage={slide3Mobile}
            h4="Stay Tuned"
            h2="Spark Up Your Passion With Good Music."
            p="Headphones so good, you will not want to take it off.Leaving home without headphones would
                be a mistake."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Header;
