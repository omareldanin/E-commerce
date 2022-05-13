import "./productImages.scss";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import { Pagination } from "swiper";
const ProductImages = (props) => {
  useEffect(() => {
    let pag = document.querySelectorAll(
      ".productImages .swiper-pagination-bullet"
    );
    for (let i = 0; i < props.images.length; i++) {
      pag[i].style.background = `url("${props.images[i]}")`;
    }
  }, [props]);
  return (
    <div className="productImages">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.images.map((img) => (
          <SwiperSlide>
            <img src={img} alt="productImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductImages;
