import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType} from "../../types/product";

export interface CartSliceState {
  cartItems: CartProductType[];
}
const initialState: CartSliceState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state: CartSliceState, action: PayloadAction<CartProductType>) => {
      const product = action.payload;
      const existItem = state.cartItems.find(
        (cartItem: any) => cartItem.id === product.id
      );
      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: any) =>
          cartItem.id === product.id ? { ...product, amount: cartItem.amount + 1 } : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, amount: 1 }];
      }
    },
    removeFromCart: (state: CartSliceState, action: PayloadAction<CartProductType>) => {
      const product = action.payload;
      const existItem = state.cartItems.find(
        (cartItem: any) => cartItem.id === product.id
      );

      if (existItem && existItem.amount === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem: any) => cartItem.id !== product.id
        );
      } else {
        state.cartItems = state.cartItems.map((cartItem: any) =>
          cartItem.id === product.id ? { ...product, amount: cartItem.amount - 1 } : cartItem
        );
      }
    },
    reset: (state: any) => { state.cartItems = [];}
  },
});

export const { addToCart, removeFromCart, reset} = cartSlice.actions;

const cartReducer= cartSlice.reducer

export default cartReducer