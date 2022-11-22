import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity--;
    },

    removeItem: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = removeItem;
    },
    getTotal: (state, action) => {
      let total = 0;
      let quantity = 0;
      let shipping = 5;

      state.items.map((item) => {
        quantity += item.quantity;
        total +=
          item.price * quantity -
          (item.price * item.discountPercentage) / 100 +
          shipping;
      });
      state.total = total;
    },
  },
});

export const { addToCart, removeItem, increment, decrement, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
