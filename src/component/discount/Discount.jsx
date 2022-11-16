 import Dcart from "./Dcart"

export default function Discount(){
    return(
        <>
         <section className="disocunt background newarrivage">
            <div className="conatainer">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                         <h2>Grande Reduction</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Tous voir</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Dcart />
            </div>    
         </section>
        </>
    )
}