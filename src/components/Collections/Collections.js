import "./collections.scss";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";
const Collections = () => {
  const title = document.querySelector("title");
  title.innerText = "Collections - Boom Theme";
  return (
    <>
      <div className="collections-header center">
        <h1>COLLECTIONS</h1>
        <p>Home / Collections</p>
      </div>
      <div className="collections">
        <div className="container-fluid">
          <div className="row">
            <Filters />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};
export default Collections;
