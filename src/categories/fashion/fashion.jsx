import Categories from "../../component/accueil/categories"
import ShopCart from "../../component/shop/shopCart"


export default function Fashion({ shopItems, addToCart }){
  
    
    return(
        <>
        <div className="shop">
        <div className="container f_flex">
            <Categories />

            <div className=" product-content grid2">
                    <ShopCart shopItems={shopItems.filter((shopItem) => shopItem.categorie === 'ordinateur')} addToCart={addToCart} />
                </div>
            </div>
          
        </div>
    
        </>
    )
}