import "./blogItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCalendarDays,
} from "@fortawesome/free-regular-svg-icons";
import Link from "../../UI/Link";
const BLogItem = (props) => {
  return (
    <div className="col blog-item">
      <div className="image">
        <img src={props.image} alt="blogImage" />
      </div>
      <div>
        <h3>Take Fingertip Control</h3>
      </div>
      <div className="info">
        <div>
          <FontAwesomeIcon icon={faCircleUser} />
          <p>By Ramamoorthi M</p>
        </div>
        <span></span>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <p>October 16,2021</p>
        </div>
      </div>
      <div className="desc">
        Accumsan lacus vel facilisis volutpat. Posuere urna nec tincidunt
        praesent. Tempus iaculis urna id volutpat. Sapien nec sagittis aliq.
      </div>
      <Link path="#">Read more</Link>
    </div>
  );
};
export default BLogItem;
