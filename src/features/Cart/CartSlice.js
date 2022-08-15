import {createSlice} from '@reduxjs/toolkit'
import cartItmes from '../../CartItmes'
const initialState = {
    cartItmes: cartItmes,
    amount: 1,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:  (state)=>{
            state.cartItmes = []
        },
        removeProduct : (state, action)=>{
           let productID = action.payload
           state.cartItmes = state.cartItmes.filter((product)=> product.id !== productID);
        },
        increase : (state, {payload}) =>{
           const cartItme = state.cartItmes.find( (itme)=> itme.id === payload.id);
           cartItme.amount = cartItme.amount + 1;
           
        },
        decrease : (state, {payload}) =>{
           const cartItme = state.cartItmes.find( (itme)=> itme.id === payload.id);
           cartItme.amount = cartItme.amount - 1;
           
        },
        calcualteTotals : (state) =>{
            let total = 0;
            let amount = 0;
            state.cartItmes.forEach( (itme)=>{
                amount += itme.amount;
                total += itme.amount *  itme.price;
            })
            state.amount = amount;
            state.total = total;
        }

    }
})

export const {clearCart, removeProduct, increase, decrease ,calcualteTotals} = cartSlice.actions;
export default cartSlice.reducer;