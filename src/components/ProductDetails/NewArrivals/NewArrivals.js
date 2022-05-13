import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation } from "swiper";
import firebase from "firebase/compat/app";
import ProductItem from "../../Collections/Products/ProductItem/ProductItem";
import { firebaseConfig } from "../../../helpers/enviroment/enviroment";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss";
import "firebase/compat/firestore";
import "firebase/analytics";
import "./newArrivals.scss";
const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const data = firestore
      .collection("products")
      .where("price", "<=", 1000)
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);
  return (
    <div className="newArrivals">
      <h3>New Arrivals</h3>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem
              key={product.id}
              id={product.id}
              image1={product.image1}
              image2={product.image2}
              name={product.name}
              price={product.price}
              rate={product.rate}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NewArrivals;
