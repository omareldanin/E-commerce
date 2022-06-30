import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    toggleCard(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem });
      } else {
        existingItem.amount += newItem.amount;
        existingItem.totalPrice += newItem.totalPrice;
      }
      state.totalQuantity += newItem.amount;
      state.totalPrice += newItem.totalPrice;
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          cartItems: state.cartItems,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        })
      );
    },
    removeitem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      state.cartItems.length === 0
        ? localStorage.removeItem("cartItems")
        : localStorage.setItem(
            "cartItems",
            JSON.stringify({
              cartItems: state.cartItems,
              totalQuantity: state.totalQuantity,
              totalPrice: state.totalPrice,
            })
          );
    },
    setCartItems(state, action) {
      const cart = action.payload;
      state.cartItems = cart.cartItems;
      state.totalPrice = cart.totalPrice;
      state.totalQuantity = cart.totalQuantity;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
