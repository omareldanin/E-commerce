import "./productItem.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faMagnifyingGlass,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductItem = (props) => {
  const stars = [];
  const rates = () => {
    const rate = props.rate.toString();
    for (let i = 0; i < Math.floor(props.rate); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    if (rate.includes(".")) {
      stars.push(<FontAwesomeIcon key={0.5} icon={faStarHalfStroke} />);
    }
    for (let i = 0; i < 5 - Math.ceil(props.rate); i++) {
      stars.push(
        <svg
          key={i + 5}
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="star"
          className="svg-inline--fa fa-star "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
          ></path>
        </svg>
      );
    }
  };
  rates();
  return (
    <div className="product">
      <div className="productHead">
        <NavLink to={`/products/${props.id}`} className="images">
          <img className="image1" src={props.image1} alt="image1" />
          <img className="image2" src={props.image2} alt="image2" />
        </NavLink>
        <div className="options">
          <NavLink
            to={`/products/${props.id}`}
            className="overlayLink"
          ></NavLink>
          <span className="center">
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="center">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="center">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
      <div className="productInfo">
        <NavLink to={`/products/${props.id}`} className="name">
          {props.name}
        </NavLink>
        <span className="rate">{stars.map((star) => star)}</span>
        <p className="price">${props.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default ProductItem;
