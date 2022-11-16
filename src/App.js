 import { Route, Routes } from 'react-router-dom';



import Home from './pages/home';
import './css/App.css';
import Header from './annex/header/header';
 import Data from './component/flashdeals/Data';
import { useState } from 'react';
import Cart from './annex/cart/Cart';
import Sdata from './component/shop/Sdata'


import Footer from './annex/footer/footer';
import Details from './annex/details/details';
import CartDetails from './annex/details/cartDetail';
import Fashion from './categories/fashion/fashion';
function App() {


  const { productItems } = Data
  const { shopItems } = Sdata
  const  [cartItem, setCartItem] = useState([])


  const addToCart = (product) => {
    const productExite = cartItem.find((item) => item.id === product.id)

    if(productExite){
      setCartItem(cartItem.map((item) => 
      (item.id === product.id ? { ...productExite, qty: productExite.qty + 1 } : item)))
    
    } else {
       setCartItem([ ...cartItem, { ...product, qty: 1 }])
    }
  }
  
const decreaseQty = (product) => {
  const productExite = cartItem.find((item) => item.id === product.id)
  if(productExite.qty === 1) {
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  }else {
    setCartItem(cartItem.map((item) => (item === product.id? {...productExite, qty: productExite.qty - 1} : item)))
  }
}


  return (
   <>
   
<Header cartItem={cartItem}/>

<Routes>
        
       <Route path='/' element={<Home productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />} />
     
        
      <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />

      <Route path="/details" element={<CartDetails cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />

      <Route path="/details" element={<Details  />} />
      
            <Route path="/fashion" element={<Fashion shopItems={shopItems} addToCart={addToCart}/>} />
      
     </Routes>
     <Footer />
       
       
    
   
    
        
     
          
  
             
   </>
  );
  }

export default App;
