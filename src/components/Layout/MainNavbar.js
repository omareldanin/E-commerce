import "./MainNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../Images/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faBars,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import uiActions from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";
const MainNavbar = () => {
  const dispatch = useDispatch();
  const totalCardItems = useSelector((state) => state.cart.totalQuantity);
  const [classes, setClasses] = useState("");
  window.onscroll = () => {
    if (window.pageYOffset > 80) {
      setClasses("fixed");
    } else {
      setClasses("");
    }
  };
  const openHandler = () => {
    dispatch(uiActions.actions.toggleSideBar());
  };
  return (
    <nav className={classes}>
      <Container fluid>
        <Row>
          <Col>
            <img src={logo} alt="logo" />
          </Col>
          <Col md={6} className="navItems">
            <div className="item center">
              <NavLink to="/">
                Home
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
              <div className="subLinks">
                <NavLink className="borderBottem" to="/about">
                  About
                </NavLink>
                <NavLink to="/services">service</NavLink>
              </div>
            </div>
            <div className="item center">
              <NavLink to="/collections">Catalog</NavLink>
            </div>
            <div className="item center">
              <NavLink to="/blogs">Blog</NavLink>
            </div>
            <div className="item center">
              <NavLink to="/contact">contact</NavLink>
            </div>
          </Col>
          <Col className="options">
            <div className="login-Link">
              <NavLink to="/login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </NavLink>
            </div>
            <div
              className="shoppingBag"
              onClick={() => {
                dispatch(cartActions.toggleCard());
              }}
            >
              <span>{totalCardItems}</span>
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
            </div>
            <div className="menubar">
              <FontAwesomeIcon icon={faBars} size="lg" onClick={openHandler} />
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default MainNavbar;
