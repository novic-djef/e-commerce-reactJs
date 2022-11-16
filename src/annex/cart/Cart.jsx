
import React from 'react';
import  './style.css';



export default function ContextCart({cartItem, addToCart, decreaseQty}){
    const totalPrice = cartItem.reduce((price, item)=> price + item.qty * item.price, 0)

    return(
        <>
           <section className='cart-items'>
            <div className="container d_flex">
            <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items product'>Votre panier d'achat est vide</h1>}

                 {cartItem.map((item) => {
                    const productQty = item.price * item.qty
                    return(
                        <div className="cart-list product d_flex">
                            <div className="img">
                               <figure> <img src={item.cover} alt={item.name} /></figure>
                            </div>
                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <h4>
                                    {item.price}.00 Frs *
                                    <span>{productQty}.00 Frs</span>
                                </h4>
                            </div>
                            <div className="cart-item-function">
                                <div className="removeCart">
                                    <button className="removeCart" onClick={() => decreaseQty(item)}>
                                        {/* <i className="fa -solid fa-xmark"></i> */}
                                        <i className="fa fa-remove close home-bth"></i>
                                    </button>
                                </div>
                                <div className="cartControl d_flex">
                                    <button className='inCart' onClick={() => addToCart(item)}>
                                    <i className="fa fa-plus"></i>
                                    </button>
                                    <button className='desCart' onClick={() => decreaseQty(item)}>
                                    <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="cart-item-price">
                                
                            </div>
                        
                        </div>
                    )
                 })}
                     
               </div>
               <div className="cart-total product">
                        <h2>bilan panier d'achat</h2>
                        <div className="d_flex">
                            <h4>Total prix</h4>
                            <h3>{totalPrice}.00 Frs</h3>
                        </div>
                     </div>
            </div>
        </section>
        </>
    )
}

