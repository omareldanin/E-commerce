import "./slideItem.scss";
import Link from "../../UI/Link";
const SlideItem = (props) => {
  return (
    <div className="slide">
      <img src={props.image} alt="largeImage" />
      <img className="mobile-img" src={props.mobileImage} alt="mobileImage" />
      <div className="container">
        <div className="head">
          <h4>{props.h4}</h4>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
          <Link path="/shop">Shop now</Link>
        </div>
      </div>
    </div>
  );
};
export default SlideItem;
