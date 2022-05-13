import "./productDetails.scss";
import NewArrivals from "./NewArrivals/NewArrivals";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import ProductImages from "./ProductImages/ProductImages";
import ProductControl from "./ProductControl/ProductControl";
import ProductDescription from "./ProductDescription/ProductDescription";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../helpers/enviroment/enviroment";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/analytics";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  const title = document.querySelector("title");
  title.innerText = `${product.name} - Boom Theme`;
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const data = firestore
      .collection("products")
      .doc(param.id)
      .get()
      .then((snapshot) => {
        setProduct(snapshot.data());
      })
      .catch((e) => console.log(e));
  }, [param]);
  return (
    <>
      <div className="product-header center">
        <h1>PRODUCT</h1>
        <p>All / {product.name}</p>
      </div>
      <div className="productDetails">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-3 filters">
              <NewArrivals />
              <FeaturedProducts />
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="product-info">
                <ProductImages images={[product.image1, product.image2]} />
                <ProductControl
                  desc={product}
                  images={[product.image1, product.image2]}
                />
              </div>
              <div className="product-description">
                <ProductDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
