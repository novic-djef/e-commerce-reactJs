import Categories from "./categories";
import Slider from "./slider";


export default function Page(){
    return(
        <>
          <section className="home">
            <div className="container d_flex">
            <Categories />
            < Slider />
            </div>
          </section>
         
        </>
    )
}