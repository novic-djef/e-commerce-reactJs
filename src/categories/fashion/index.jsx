import Fashion from "./fashion";
import './style.css';

export default function Index({shopItems, addToCart}){
    return(
        <>

<section className="box background ">
            <div className="conatainer">
                <div className="heading d_flex">
                <div className=" product-content grid1">
        <Fashion shopItems={shopItems} addToCart={addToCart}/>
        </div>
                </div>
            
            </div>    
         </section>
             

       
        </>
    )
}