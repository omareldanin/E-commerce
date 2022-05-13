import "./specialOffers.scss";
import React, { useEffect, useState } from "react";
import ProductItem from "../../Products/ProductItem/ProductItem";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/analytics";
const SpecialOffers = () => {
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
    <div className="specialOffers">
      <h3>Special Offers</h3>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image1={product.image1}
          image2={product.image2}
          name={product.name}
          price={product.price}
          rate={product.rate}
        />
      ))}
    </div>
  );
};
export default SpecialOffers;
