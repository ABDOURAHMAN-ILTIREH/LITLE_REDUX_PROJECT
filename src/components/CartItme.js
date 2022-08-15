import React from 'react'
import {removeProduct, increase, decrease} from '../features/Cart/CartSlice'
import {useDispatch} from 'react-redux'

function CartItme({images, title, price, id, amount}) {
  const dispatch = useDispatch()

  return (
    <article className='singleProduct'>
        <div className='leftProduct'>
                <img src={images} alt="react" />
                    <div>
                        <h4>{title}</h4>
                        <p>${price}</p>
                        <button type='button' id='removeBtn' onClick={()=>dispatch(removeProduct(id))}>Remove</button>
                    </div>
        </div>
        <div className='counterProduct'>
            <button id='increament'onClick={ ()=>{
              if(amount === 1){
                dispatch(removeProduct(id))
                return;
              }
                dispatch(decrease({id}))}}>-</button>
            <p>{amount}</p>
            <button id='decreament' onClick={()=>{dispatch(increase({id}))}}>+</button>
        </div>
    </article>
  )
}

export default CartItme