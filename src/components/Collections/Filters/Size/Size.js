import "../Color/color.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Size = () => {
  return (
    <div className="color">
      <h3>Size</h3>
      <ul>
        <li>
          <input type="checkbox" id="size1" name="size1" value="2.5" />
          <label htmlFor="size1">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            2.5mm
            <span>(9)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="size2" name="size2" value="3.5" disabled />
          <label htmlFor="size2">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            3.5mm
            <span>(4)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="size3" name="size3" value="12" />
          <label htmlFor="size3">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            12mm
            <span>(0)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="size4" name="size4" value="13" disabled />
          <label htmlFor="size4">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            13mm
            <span>(2)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="size5" name="size5" value="13.5" />
          <label htmlFor="size5">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            13.5mm
            <span>(5)</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default Size;
