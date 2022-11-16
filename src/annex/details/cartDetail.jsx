import { Link } from "react-router-dom";
import novic from '../../logo/novic.JPG';


export default function CartDetails ({cartItem, productItems, addToCart, decreaseQty, shopItems})  {
    const totalPrice = cartItem.reduce((price, item)=> price + item.qty * item.price, 0)
    return(
        <>
        {cartItem.map((item) => {
            const productQty = item.price * item.qty
            return(
        <section className='cart-items'>
        

<div className="container d_flex">
<div className='cart-img'>
    <img src={item.cover} alt="" />
</div>




<div className="detail-info">
            <div className="product-rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <Link to="/" className="count-review">(05 review)</Link>
            </div>
               <h2 className="product-name">{item.name}</h2>
            <div className="short-desc">
                <ul>
                    <li>{item.desc} </li>
                    <li>Dual-core A7 with quad-core graphics</li>
                    <li>{item.desc}</li>
                </ul>
            </div>
            <div className="wrap-social">
                <Link className="link-socail" to="#"><img src="assets/images/social-list.png" alt=""/></Link>
            </div>
            <div className="wrap-price"><span className="product-price">{productQty}.00 Frs</span></div>
            <div className="stock-info in-stock">
                <p className="availability">Availability: <b>In Stock</b></p>
            </div>
           
                <div className="cartControl">
                    <button className='inCart' onClick={() => addToCart(item)}>
                    <i className="fa fa-plus"></i>
                    </button>
                    <button className='desCart' onClick={() => decreaseQty(item)}>
                    <i className="fa fa-minus"></i>
                    </button>
                </div>
            <div className="wrap-butons">
                <button className=" btn add-to-cart" onClick={() => addToCart(productItems)}>
                    <i className="fa fa-shopping-cart "></i>
                </button>
                <button className=" btn add-to-cart" onClick={() => addToCart(productItems)}>
                    {/* <i className="fa fa-shopping-cart "></i> */} <p>Acheter</p>
                </button>
            </div>
                <div className="wrap-btn">
                    <Link to="#" className="btn btn-compare">Add Compare</Link>
                    <Link to="#" className="btn btn-wishlist">Add Wishlist</Link>
                </div>
                
              




        </div>


        <div className="widget-content">
            <ul className="our-services">

                <li className="service">
                    <Link className="link-to-service" to="#">
                        <i className="fa fa-truck" aria-hidden="true"></i>
                        <div className="right-content">
                            <b className="title">Free Shipping</b>
                            <span className="subtitle">On Oder Over $99</span>
                            <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </Link>
                </li>

                <li className="service">
                    <Link className="link-to-service" to="#">
                        <i className="fa fa-gift" aria-hidden="true"></i>
                        <div className="right-content">
                            <b className="title">Special Offer</b>
                            <span className="subtitle">Get a gift!</span>
                            <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </Link>
                </li>

                <li className="service">
                    <Link className="link-to-service" to="#">
                        <i className="fa fa-reply" aria-hidden="true"></i>
                        <div className="right-content">
                            <b className="title">Order Return</b>
                            <span className="subtitle">Return within 7 days</span>
                            <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>


     


</div>

<div className="cart-total product">
        <h2>bilan panier d'achat</h2>
        <div className="d_flex">
            <h4>Total prix</h4>
            <h3>{totalPrice}.00 Frs</h3>
        </div>
     </div>


    <div className="advance-info">
        <div className="tab-control normal">
            <Link to="#description" className="tab-control-item active">description</Link>
            <Link to="#add_infomation" className="tab-control-item">Addtional Infomation</Link>
            <Link to="#review" className="tab-control-item">Reviews</Link>
        </div>
        <div className="tab-content-item active" id="description">
                    <p>Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, a t everti meliore erroribus sea. ro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.</p>
                    <p>Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum eque. Est cu nibh clita. Sed an nominavi, et stituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus taria . </p>
                    <p>experian soleat maluisset per. Has eu idque similique, et blandit scriptorem tatibus mea. Vis quaeque ocurreret ea.cu bus  scripserit, modus voluptaria ex per.</p>
                </div>
                <table className="shop_attributes">
                        <tbody>
                            <tr>
                                <th>Weight</th><td className="product_weight">1 kg</td>
                            </tr>
                            <tr>
                                <th>Dimensions</th><td className="product_dimensions">12 x 15 x 23 cm</td>
                            </tr>
                            <tr>
                                <th>Color</th><td><p>Black, Blue, Grey, Violet, Yellow</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tab-content-item active" id="review">
                    
                    <div className="wrap-review-form">
                   
                        <div className="comments">
                            <h2 className="woocommerce-Reviews-title">01 review for <span>Radiant-360 R6 Chainsaw Omnidirectional [Orage]</span></h2>
                            <ol className="commentlist">
                                <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-20">
                                    <div id="comment-20" className="comment_container"> 
                                        <img alt="" src={novic} height="80px" width="80px"/>
                                        <div className="comment-text">
                                            <div className="star-rating">
                                                <span className="width-80-percent">Rated <strong className="rating">5</strong> out of 5</span>
                                            </div>
                                            <p className="meta"> 
                                                <strong className="woocommerce-review__author">admin</strong> 
                                                <span className="woocommerce-review__dash">-</span>
                                                <time className="woocommerce-review__published-date" datetime="2008-02-14 20:00">Tue, Aug 15,  20</time>
                                            </p>
                                            <div className="description">
                                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        
                            </div>
                        </div>
                        
                    </div>

                   


        

        </section>
        )
    })}
        </>
    )
}

