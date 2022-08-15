import  {useEffect} from "react";

import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import './index.css'

import   {useDispatch, useSelector} from 'react-redux'
import {calcualteTotals} from './features/Cart/CartSlice'
import Model from "./components/Model";



function App() {
  const dispatch = useDispatch()
  const {cartItmes} = useSelector((state)=>state.cart)

  const {isOpen } = useSelector((state)=>state.model)
 
  useEffect( ()=>{
    dispatch(calcualteTotals())
  }, [cartItmes]);

  return (
  <main className="App">
    {
    isOpen &&  <Model />
    }
    <Navbar />
    <CartContainer />
  </main>
  );
}



export default App;
