import "./productDescription.scss";
import { useState } from "react";
import Button from "../../UI/Button";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";
const ProductDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  return (
    <>
      <div className="buttons">
        <Button
          classes={showDescription && "active"}
          click={() => {
            setShowDescription(true);
            setShowReviews(false);
          }}
        >
          Product Description
        </Button>
        <Button
          classes={showReviews && "active"}
          click={() => {
            setShowDescription(false);
            setShowReviews(true);
          }}
        >
          Reviews
        </Button>
      </div>
      {showDescription && <Description />}
      {showReviews && <Reviews />}
    </>
  );
};
export default ProductDescription;
