import "./color.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Color = () => {
  return (
    <div className="color">
      <h3>Color</h3>
      <ul>
        <li>
          <input type="checkbox" id="color1" name="color1" value="black" />
          <label htmlFor="color1">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Black
            <span>(9)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="color2" name="color2" value="Blue" />
          <label htmlFor="color2">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Blue
            <span>(4)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="color3" name="color3" value="Green" />
          <label htmlFor="color3">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Green
            <span>(0)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="color4" name="color4" value="Orange" />
          <label htmlFor="color4">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Orange
            <span>(2)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="color5" name="color5" value="Red" />
          <label htmlFor="color5">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Red
            <span>(5)</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default Color;
