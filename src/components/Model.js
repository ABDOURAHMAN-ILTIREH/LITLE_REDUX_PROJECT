import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModel } from '../features/Model/ModelSlice'
import { clearCart } from '../features/Cart/CartSlice'

const Model = () => {
    const dispatch = useDispatch()
  return (
    <div className='Model'>
        <div className="removeContainer">
            <h4>remove all itmes from your shopping cart</h4>
            <div className="buttons">
                <button id='confirm' onClick={()=>(dispatch(clearCart()))}>confirm</button>
                <button id='cancel' onClick={()=>dispatch(closeModel())}>cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Model