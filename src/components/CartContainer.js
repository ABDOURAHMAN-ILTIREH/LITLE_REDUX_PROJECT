import React from 'react'

import { useSelector, useDispatch } from 'react-redux/es/exports'


import CartItme from './CartItme';
import {openModel} from '../features/Model/ModelSlice';



const CartContainer = () => {

    const {cartItmes, amount,total}= useSelector((store)=>store.cart);
    const dispatch = useDispatch()
    

 if(amount < 1){
    return (
    <section className='cartContainer'>
        <header>
            <h2>your bag</h2>
            <h4 className='Empty'>is currently empty....</h4>
        </header>
    </section>
    ); 
}
return(
    <section className='cartContainer'>
    <header>
        <h2>your bag</h2>
    </header>
    <div className="content-Product">
       <div className='SingleProductContainer'>
        {cartItmes.map( itmes =>(
            <CartItme {...itmes} key={itmes.id} />
        ))}
        </div>
    <footer className="footer">
        <div>
            <p>TOTAL</p>
            <span>${total}</span>
        </div>
        <button type='button' id='cartModel' onClick={()=>dispatch(openModel())}>clear cart</button>
    </footer>
    </div>
</section>
)
 
}

export default CartContainer