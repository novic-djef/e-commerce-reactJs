
import TopCart from './topCart';
import './style.css';

export default function TopCate(){
    return(
        <>
        <section className="TopCate background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <i className="fa fa-border-all"></i>
                        <h2>Toutes les categories</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Tous voir</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
            <TopCart />
            </div>
        </section>
        </>
    )
}