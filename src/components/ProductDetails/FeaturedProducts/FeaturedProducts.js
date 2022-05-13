import "./featuredProducts.scss";
import React, { useEffect, useState } from "react";
import ProductItem from "../../Collections/Products/ProductItem/ProductItem";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/analytics";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const firestore = firebase.firestore();
    const data = firestore
      .collection("products")
      .where("rate", ">=", 4.5)
      .orderBy("rate", "desc")
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);
  return (
    <div className="featuredProducts">
      <h3>Featured Products</h3>
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
export default FeaturedProducts;
