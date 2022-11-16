import Cart from "./cart"

export default function NewArrivage() {
    return(
        <>
        <section className="newarrivage background">
            <div className="conatainer">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                         <h2>Nouvelle arrivage</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Tous voir</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <Cart />
            </div>
        </section>
        </>
    )
}