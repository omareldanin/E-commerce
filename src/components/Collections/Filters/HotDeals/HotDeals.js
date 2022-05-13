import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation } from "swiper";
import firebase from "firebase/compat/app";
import ProductItem from "../../Products/ProductItem/ProductItem";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss";
import "firebase/compat/firestore";
import "firebase/analytics";
import "./HotDeals.scss";
const HotDeals = () => {
  const [products, setProducts] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyAfROUr-zia4HiB30WdXnmh-dl8EBmHYDo",
    authDomain: "boom-theme-af424.firebaseapp.com",
    projectId: "boom-theme-af424",
    storageBucket: "boom-theme-af424.appspot.com",
    messagingSenderId: "759731372070",
    appId: "1:759731372070:web:79063aa730d5f0bf2466e7",
    measurementId: "G-CZ8WL2W96J",
  };
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
    <div className="hotDeals">
      <h3>Hot Deals</h3>
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
export default HotDeals;
