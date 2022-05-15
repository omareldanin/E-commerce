import { Fragment } from "react/cjs/react.production.min";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Cart from "../Cart/Cart";
import "./Layout.scss";
const Layout = (props) => {
  return (
    <Fragment>
      <SideBar />
      <MainNavbar />
      <Cart />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
