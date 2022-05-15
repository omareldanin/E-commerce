import "./cartItem.scss";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { cartActions } from "../../../store/cartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const amount = useRef();
  //==================================================
  const reduceAmountHandler = () => {
    let value = parseInt(amount.current.value);
    if (value === 0) {
      return;
    }
    --value;
    amount.current.value = value;
    dispatch(cartActions.removeitem(props.product.id));
  };
  //==================================================
  const increaseAmountHandler = () => {
    let value = parseInt(amount.current.value);
    ++value;
    amount.current.value = value;
    dispatch(
      cartActions.addItem({
        id: props.product.id,
        amount: 1,
        totalPrice: props.product.price,
      })
    );
  };
  //==================================================
  return (
    <div className="cartItem">
      <div className="image">
        <img src={props.product.image} alt="productImage" />
      </div>
      <div className="productInfo">
        <h5>{props.product.name}</h5>
        <p className="props">{`${props.product.size} mm / ${props.product.color} / ${props.product.material}`}</p>
        <h5>${props.product.totalPrice.toLocaleString()}.00</h5>
        <div className="amountInput">
          <p className="reduce" onClick={reduceAmountHandler}>
            -
          </p>
          <input
            type="number"
            name="amount"
            min="1"
            ref={amount}
            value={props.product.amount}
            readOnly
          />
          <p className="increase" onClick={increaseAmountHandler}>
            +
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
