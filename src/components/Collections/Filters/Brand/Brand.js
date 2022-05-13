import "../Color/color.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Brand = () => {
  return (
    <div className="color">
      <h3>Brand</h3>
      <ul>
        <li>
          <input type="checkbox" id="brand1" name="brand1" value="arc" />
          <label htmlFor="brand1">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Arc
            <span>(9)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="brand2" name="brand2" value="autofy" />
          <label htmlFor="brand2">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Autofy
            <span>(4)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="brand3" name="brand3" value="beat" />
          <label htmlFor="brand3">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Beat
            <span>(0)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="brand4" name="brand4" value="nemu" />
          <label htmlFor="brand4">
            <FontAwesomeIcon icon={faCheck} size="sm" />
            Nemu
            <span>(2)</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default Brand;
