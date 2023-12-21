import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.dish_id === action.payload.dish_id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    decreaseCart: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: any) => cartItem.dish_id === action.payload.dish_id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem: any) => cartItem.dish_id !== action.payload.dish_id
        );
        state.cartItems = nextCartItems;
      }
    },
  },
});

export const { addToCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
