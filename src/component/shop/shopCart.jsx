import React, { useState } from "react"
import { Link} from 'react-router-dom'

export default function FlashCard({ shopItems, addToCart }) {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }


  return (
    <>
     
        {shopItems.map((shopItems) => {
          return (
            <div className='box' >
              <div className='product mtop' >
                <div className='img'>
                <Link to="Details" onClick={() => addToCart(shopItems)}>
                  <span className='discount'>{shopItems.discount}% Off</span>
                 <figure> <img src={shopItems.cover} alt='' /></figure>
                 </Link>
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa fa-heart-o' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{shopItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>{shopItems.price}.00 Frs </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(shopItems)}>
                      {/* <i className='fa fa-plus'></i> */}
                      <i className="fa fa-shopping-cart "></i>
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}


