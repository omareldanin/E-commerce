import "./cart.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem/CartItem";
const Cart = () => {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const closeCart = () => {
    dispatch(cartActions.toggleCard());
  };
  useEffect(() => {
    const oldCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (oldCartItems) {
      dispatch(cartActions.setCartItems(oldCartItems));
    }
  }, [dispatch]);
  return (
    <>
      <div
        className={`cart-overlay ${showCart ? "show-cart-overlay" : ""}`}
        onClick={closeCart}
      ></div>
      <div className={`cart ${showCart ? "showCart" : ""}`}>
        <FontAwesomeIcon icon={faXmark} onClick={closeCart} />
        <h3>Your Cart</h3>
        {totalQuantity === 0 ? (
          <div className="whenEmpty">
            <p>Your cart is empty</p>
            <button>
              <NavLink to="/collections">Continue shopping</NavLink>
            </button>
          </div>
        ) : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
        {totalQuantity !== 0 ? (
          <>
            <div className="instructions">
              <p>Special instructions for seller</p>
              <textarea rows={5}></textarea>
            </div>
            <div className="total">
              <p>Total</p>
              <p>${totalPrice.toLocaleString()}.00</p>
            </div>
            <div>
              <button>
                <NavLink to="">Proceed to Checkout</NavLink>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default Cart;
