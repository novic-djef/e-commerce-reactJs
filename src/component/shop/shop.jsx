import Catg from "./catg"
import ShopCart from "./shopCart"
import './style.css'

export default function Shop({shopItems, addToCart}) {
    
    return(
        <>
        <section className="shop background">
            <div className="container d_flex">
                        <Catg />
                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2>Electronique </h2>
                        </div>
                        <div className="heading-right row">
                            <span>Tous voir</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>

                    <div className=" product-content grid1">
                        <ShopCart shopItems={shopItems} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}