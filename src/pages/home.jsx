

import Page from '../component/accueil/page';
import FlashDeals from '../component/flashdeals/FlashDeals';
import TopCate from '../component/top/topCate';
import NewArrivage from '../component/newarrivage/newArrivage';
import Discount from '../component/discount/Discount';
import Shop from '../component/shop/shop'
import Annonce from '../component/annonce/annonce'
import Amballage from '../component/emballage/amballage';

export default function Home({productItems, addToCart, cartItem, shopItems}) {
    return(
        <>
        <Page  cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart} />    
    
        <TopCate />
        <NewArrivage />
        <Discount /> 
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Annonce />
        <Amballage />

     
        
        
      
         </>
    )
}

