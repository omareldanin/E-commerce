import { Fragment } from "react/cjs/react.production.min";
import MainNavbar from "./MainNavbar/MainNavbar";
import Footer from "./Footer/Footer";
import SideBar from "./Sidebar/SideBar";
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
