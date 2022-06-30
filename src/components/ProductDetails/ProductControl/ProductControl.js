import "./product-control.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
const ProductControl = (props) => {
  const dispatch = useDispatch();
  const amount = useRef();
  const [productInfo, setProductInfo] = useState({});
  useEffect(() => {
    setProductInfo({
      id: props.id,
      name: props.desc.name,
      image: props.desc.image1,
      price: props.desc.price,
      amount: 1,
      totalPrice: props.desc.price,
      color: "black",
      size: "2.5",
      material: "silicon",
    });
  }, [props]);
  //==================================================
  const sizeChangeHandler = (e) => {
    let sizeOptions = Array.from(
      document.querySelectorAll(".product-control .size li")
    ).filter((size) => {
      return size.classList.contains("active");
    });
    if (sizeOptions.length > 0) {
      sizeOptions[0].classList.remove("active");
    }
    e.target.className = "active";
  };
  //==================================================
  const materialChangeHandler = (e) => {
    let sizeOptions = Array.from(
      document.querySelectorAll(".product-control .material li")
    ).filter((size) => {
      return size.classList.contains("active");
    });
    if (sizeOptions.length > 0) {
      sizeOptions[0].classList.remove("active");
    }
    e.target.className = "active";
  };
  //==================================================
  const colorChangeHandler = (e) => {
    let sizeOptions = Array.from(
      document.querySelectorAll(".product-control .colors ul img")
    ).filter((size) => {
      return size.classList.contains("active");
    });
    if (sizeOptions.length > 0) {
      sizeOptions[0].classList.remove("active");
    }
    console.log(e);
    e.target.className = "active";
  };
  //==================================================
  const amountInputPlur = (e) => {
    let value = parseInt(amount.current.value);
    if (value <= 0) {
      amount.current.value = "0";
    }
  };
  //==================================================
  const reduceAmountHandler = () => {
    let value = parseInt(amount.current.value);
    if (value === 0) {
      return;
    }
    --value;
    amount.current.value = value;
    setProductInfo((pre) => ({
      ...pre,
      amount: value,
      totalPrice: value * props.desc.price,
    }));
  };
  //==================================================
  const increaseAmountHandler = () => {
    let value = parseInt(amount.current.value);
    ++value;
    amount.current.value = value;
    setProductInfo((pre) => ({
      ...pre,
      amount: value,
      totalPrice: value * props.desc.price,
    }));
  };
  //==================================================
  return (
    <div className="product-control">
      <div className="name">
        <h1>{props.desc.name}</h1>
      </div>
      <div className="price">
        <span>Price:</span>
        <p>${props.desc.price?.toFixed(2)}</p>
      </div>
      <div className="size">
        <span>Size:</span>
        <div className="options">
          <ul>
            <li className="active" data-value="2.5" onClick={sizeChangeHandler}>
              2.5 mm
            </li>
            <li data-value="13.5" onClick={sizeChangeHandler}>
              13.5 mm
            </li>
            <li data-value="12.5" onClick={sizeChangeHandler}>
              12.5 mm
            </li>
            <li data-value="3.5" onClick={sizeChangeHandler}>
              3.5 mm
            </li>
          </ul>
        </div>
      </div>
      <div className="colors">
        <span>Color:</span>
        <div className="options">
          <ul>
            {props.images.map((img, index) => (
              <li key={index} onClick={colorChangeHandler}>
                <img src={img} alt="productImage" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="material">
        <span>Material:</span>
        <div className="options">
          <ul>
            <li
              className="active"
              data-value="Silicon"
              onClick={materialChangeHandler}
            >
              Silicon
            </li>
            <li data-value="Plastic" onClick={materialChangeHandler}>
              Plastic
            </li>
            <li data-value="Fiber" onClick={materialChangeHandler}>
              Fiber
            </li>
          </ul>
        </div>
      </div>
      <div className="availability">
        <span>Availability:</span>
        <p className="instock">In stock !</p>
      </div>
      <div className="amountInput">
        <span>Amount</span>
        <p className="reduce" onClick={reduceAmountHandler}>
          -
        </p>
        <input
          type="number"
          name="amount"
          min="0"
          defaultValue="1"
          ref={amount}
          onBlur={amountInputPlur}
        />
        <p className="increase" onClick={increaseAmountHandler}>
          +
        </p>
      </div>
      <div className="buttons">
        <Button
          click={() => {
            if (productInfo.amount !== 0) {
              dispatch(cartActions.addItem(productInfo));
            }
          }}
        >
          Add To Cart
        </Button>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};
export default ProductControl;
