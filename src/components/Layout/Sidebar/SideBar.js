import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import uiActions from "../../../store/uiSlice";
const SideBar = () => {
  const isVisiable = useSelector((state) => state.ui.showSideBar);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(uiActions.actions.toggleSideBar());
  };
  return (
    <>
      <div
        className={`sideBar-over ${isVisiable ? "sideBar-over-open" : ""}`}
        onClick={closeHandler}
      ></div>
      <div className={`sidebar ${isVisiable ? "sidebar-open" : ""}`}>
        <FontAwesomeIcon icon={faClose} size="lg" onClick={closeHandler} />
        <div className="items">
          <NavLink to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/collections" className="item">
            Catalog
          </NavLink>
          <NavLink to="/blogs" className="item">
            Blog
          </NavLink>
          <NavLink to="/contact" className="item">
            contact
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default SideBar;
