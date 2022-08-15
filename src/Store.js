import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/Cart/CartSlice'
import modelReducer from "./features/Model/ModelSlice";


export const store = configureStore( {
    reducer:{
         cart : cartReducer,
         model : modelReducer,
    }
})