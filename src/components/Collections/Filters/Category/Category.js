import "./Category.scss";
import { NavLink } from "react-router-dom";
const Category = () => {
  const openSubLinks = (e) => {
    const listItems = document.querySelectorAll(".mainLink");
    const parent = e.nativeEvent.path[1];
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
      e.target.innerText = "+";
      return;
    }
    listItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector("span").innerText = "+";
    });
    parent.classList.add("active");
    e.target.innerText = "-";
  };
  return (
    <div className="category">
      <h3>Category</h3>
      <ul className="mainLinksList">
        <li className="mainLink">
          <NavLink className="link1" to="/collections/wireless">
            Wireless
          </NavLink>
          <span onClick={openSubLinks}>+</span>
          <ul className="subLinks">
            <li>
              <NavLink className="link2" to="/collections/wireless">
                V50 Earphone
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="mainLink">
          <NavLink className="link1" to="/collections/noise-isolates">
            Noise Isolated
          </NavLink>
          <span onClick={openSubLinks}>+</span>
          <ul className="subLinks">
            <li>
              <NavLink className="link2" to="/collections/wireless">
                V50 Earphone
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="mainLink">
          <NavLink className="link1" to="/collections/noise-cancelling">
            Noise-Cancelling
          </NavLink>
          <span onClick={openSubLinks}>+</span>
          <ul className="subLinks">
            <li>
              <NavLink className="link2" to="/collections/wireless">
                V50 Earphone
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="mainLink">
          <NavLink className="link1" to="/collections/sports-earbud">
            Sports Earbud
          </NavLink>
          <span onClick={openSubLinks}>+</span>
          <ul className="subLinks">
            <li>
              <NavLink className="link2" to="/collections/wireless">
                V50 Earphone
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Category;
