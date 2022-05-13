import "./product-control.scss";
import { useState, useRef } from "react";
import Button from "../../UI/Button";
const ProductControl = (props) => {
  const amount = useRef();
  const [productInfo, setProductInfo] = useState({
    name: props.desc.name,
    price: props.desc.price,
    quantity: 1,
    color: "black",
    size: "2.5",
    material: "silicon",
  });
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
  const amountInputPlur = (e) => {
    let value = parseInt(amount.current.value);
    if (value <= 0) {
      amount.current.value = "0";
    }
  };
  const reduceAmountHandler = () => {
    let value = parseInt(amount.current.value);
    if (value === 0) {
      return;
    }
    value--;
    amount.current.value = value;
  };
  const increaseAmountHandler = () => {
    let value = parseInt(amount.current.value);
    value++;
    amount.current.value = value;
  };
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
            {props.images.map((img) => (
              <li onClick={colorChangeHandler}>
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
          defaultValue="0"
          ref={amount}
          onBlur={amountInputPlur}
        />
        <p className="increase" onClick={increaseAmountHandler}>
          +
        </p>
      </div>
      <div className="buttons">
        <Button>Add To Cart</Button>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};
export default ProductControl;
