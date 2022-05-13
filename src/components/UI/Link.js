import "./Button.scss";
import { NavLink } from "react-router-dom";
const Link = (props) => {
  return (
    <NavLink className="link" to={props.path}>
      {props.children}
    </NavLink>
  );
};
export default Link;
