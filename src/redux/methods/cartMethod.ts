import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ProductType, CartProduct } from '../../types/product';

const initialState: CartProduct[]= []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => { 
            const productIndex = state.findIndex(product => product.id === action.payload.id); 
            console.log(productIndex)
            if (productIndex !== -1) {
                state[productIndex].amount += 1;
            } else {
                state.push({...action.payload, amount:1})
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => { 
            const productIndex = state.findIndex(product => product.id === action.payload);
            if (state[productIndex].amount > 1) {
                state[productIndex].amount -= -1;
            } else {
                return state.filter(product => product.id !== action.payload);
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer= cartSlice.reducer

export default cartReducer

// export const addToCart = (state: any[], action: PayloadAction<ProductType[]>) => {
//     const productIndex = state.findIndex(product => product.id === action.payload.id);
// }



