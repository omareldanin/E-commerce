import "./filters.scss";
import Category from "./Category/Category";
import Color from "./Color/Color";
import Size from "./Size/Size";
import Brand from "./Brand/Brand";
import Button from "../../UI/Button";
import HotDeals from "./HotDeals/HotDeals";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
const Filters = () => {
  const clearAllHandler = (e) => {
    const checkItems = document.querySelectorAll(".color ul input");
    checkItems.forEach((item) => (item.checked = false));
  };
  return (
    <div className="col-md-4 col-lg-3 filters">
      <Category />
      <Color />
      <Size />
      <Brand />
      <div className="clearAll">
        <Button click={clearAllHandler}>Clear All</Button>
      </div>
      <HotDeals />
      <SpecialOffers />
    </div>
  );
};
export default Filters;
