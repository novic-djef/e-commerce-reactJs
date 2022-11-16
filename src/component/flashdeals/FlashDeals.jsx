import FlashCard from "./FlashCard"
import "./style.css"

export default function FlashDeals({productItems, addToCart}) {


  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Promotions..</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}



