import "./products.scss";
import ProductItem from "./ProductItem/ProductItem";
import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { firebaseConfig } from "../../../helpers/enviroment/enviroment";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [orderMethod, setOrderMethod] = useState({
    value: "rate",
    method: "desc",
  });
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const data = firestore
      .collection("products")
      .orderBy(orderMethod.value, orderMethod.method)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, [orderMethod]);
  const toggleDropDown = (e) => {
    document.querySelector(".select .option").classList.toggle("openOption");
    document.querySelector(".dorpDawnOverlay").classList.toggle("show");
    document.querySelector(".select").classList.toggle("openSelect");
  };
  const optionHandler = (e) => {
    setOrderMethod({
      method: e.target.dataset.order,
      value: e.target.dataset.value,
    });
    document.querySelector(".select .value").innerText = e.target.innerText;
  };
  return (
    <div className="col-md-8 col-lg-9 products">
      <div className="filterList">
        <div className="dorpDawnOverlay" onClick={toggleDropDown}></div>
        <div className="list">
          <p>Sort by</p>
          <div className="select" onClick={toggleDropDown}>
            <span className="value">Featured</span>
            <FontAwesomeIcon icon={faCaretDown} size="sm" />
            <div className="option">
              <span data-value="rate" data-order="desc" onClick={optionHandler}>
                Featured
              </span>
              <span data-value="price" data-order="asc" onClick={optionHandler}>
                Price,low to high
              </span>
              <span
                data-value="price"
                data-order="desc"
                onClick={optionHandler}
              >
                Price,high to low
              </span>
              <span data-value="date" data-order="desc" onClick={optionHandler}>
                date,new to old
              </span>
              <span data-value="date" data-order="asc" onClick={optionHandler}>
                date,old to new
              </span>
            </div>
          </div>
        </div>
      </div>
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
export default Products;
